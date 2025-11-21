// Canvas particle animation

// Tu script de sistema de partículas complejo
class ComplexParticleSystem {
    constructor() {
        this.canvas = document.getElementById('particleCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.swarms = [];
        this.windFields = [];
        this.constellations = [];
        this.mouse = { x: 0, y: 0 };
        this.scrollY = 0;
        this.lastScrollY = 0;
        this.scrollVelocity = 0;
        this.time = 0;
        this.trailPoints = [];

        this.init();
        this.animate();
        this.setupEventListeners();
    }

    init() {
        this.resizeCanvas();
        this.createParticleSystem();
        this.createWindFields();
        this.createConstellations();
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createWindFields() {
        this.windFields = [];
        const fieldCount = 15;

        for (let i = 0; i < fieldCount; i++) {
            this.windFields.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: Math.random() * 300 + 200,
                strength: Math.random() * 0.3 + 0.1,
                direction: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.01,
                phase: Math.random() * Math.PI * 2,
                frequency: Math.random() * 0.02 + 0.005
            });
        }
    }

    createConstellations() {
        this.constellations = [];
    }

    getStarColor() {
        const starTypes = [
            { hue: 0, saturation: 0, lightness: 90 },     // Blanco
            { hue: 45, saturation: 80, lightness: 85 },   // Oro pálido
            { hue: 40, saturation: 100, lightness: 75 },  // Oro intenso
            { hue: 30, saturation: 60, lightness: 80 },   // Blanco cálido
            { hue: 0, saturation: 0, lightness: 60 }      // Gris plata
        ];

        return starTypes[Math.floor(Math.random() * starTypes.length)];
    }

    getGaussianPosition(centerX, centerY, maxRadius) {
        const u1 = Math.random();
        const u2 = Math.random();

        const z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
        const z1 = Math.sqrt(-2 * Math.log(u1)) * Math.sin(2 * Math.PI * u2);

        const x = centerX + (z0 * maxRadius * 0.3);
        const y = centerY + (z1 * maxRadius * 0.3);

        return {
            x: Math.max(0, Math.min(this.canvas.width, x)),
            y: Math.max(0, Math.min(this.canvas.height, y))
        };
    }

    createParticleSystem() {
        this.particles = [];
        this.swarms = [];

        const isMobile = window.innerWidth < 768;
        const swarmCount = 4;
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        const maxRadius = Math.min(this.canvas.width, this.canvas.height) * 0.5;

        for (let s = 0; s < swarmCount; s++) {
            let swarmPosition;

            if (s < swarmCount * 0.6) {
                swarmPosition = this.getGaussianPosition(centerX, centerY, maxRadius * 0.4);
            } else {
                const angle = (s / swarmCount) * Math.PI * 2 + Math.random() * 0.5;
                const distance = Math.random() * maxRadius * 0.7 + maxRadius * 0.3;
                swarmPosition = {
                    x: centerX + Math.cos(angle) * distance,
                    y: centerY + Math.sin(angle) * distance
                };
            }

            const swarm = {
                centerX: swarmPosition.x,
                centerY: swarmPosition.y,
                targetX: swarmPosition.x + (Math.random() - 0.5) * 200,
                targetY: swarmPosition.y + (Math.random() - 0.5) * 200,
                particles: [],
                cohesionRadius: Math.random() * 60 + 40,
                separationRadius: Math.random() * 20 + 10,
                speed: Math.random() * 0.3 + 0.1,
                color: this.getStarColor(),
                windSensitivity: Math.random() * 0.4 + 0.1,
                spiralPhase: Math.random() * Math.PI * 2,
                spiralSpeed: Math.random() * 0.008 + 0.003
            };

            this.swarms.push(swarm);
        }

        const swarmParticles = isMobile ? 50 : 500;
        const particlesPerSwarm = Math.floor(swarmParticles / swarmCount);

        for (let s = 0; s < swarmCount; s++) {
            const swarm = this.swarms[s];

            const particleCount = s < swarmCount * 0.6 ?
                particlesPerSwarm + Math.floor(Math.random() * 100) :
                0;

            for (let i = 0; i < particleCount; i++) {
                const angle = Math.random() * Math.PI * 2;
                const radius = Math.random() * swarm.cohesionRadius;

                const particle = {
                    x: swarm.centerX + Math.cos(angle) * radius,
                    y: swarm.centerY + Math.sin(angle) * radius,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 0.8 + 0.2,
                    opacity: Math.random() * 0.8 + 0.2,
                    baseOpacity: Math.random() * 0.8 + 0.2,
                    hue: swarm.color.hue + (Math.random() - 0.5) * 20,
                    saturation: swarm.color.saturation + (Math.random() - 0.5) * 20,
                    lightness: swarm.color.lightness + (Math.random() - 0.5) * 15,
                    spin: (Math.random() - 0.5) * 0.02,
                    spinAcceleration: 0,
                    trail: [],
                    maxTrailLength: Math.floor(Math.random() * 5) + 15,
                    swarmIndex: s,
                    phase: Math.random() * Math.PI * 2,
                    frequency: Math.random() * 0.01 + 0.003,
                    energy: Math.random() * 1 + 0.3,
                    mass: Math.random() * 1 + 0.3,
                    windResistance: Math.random() * 0.2 + 0.05,
                    isSwarmParticle: true
                };

                this.particles.push(particle);
                swarm.particles.push(particle);
            }
        }

        const individualParticles = isMobile ? 300 : 1500;

        for (let i = 0; i < individualParticles; i++) {
            const color = this.getStarColor();

            const particle = {
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                size: Math.random() * 0.6 + 0.1,
                opacity: Math.random() * 0.6 + 0.1,
                baseOpacity: Math.random() * 0.6 + 0.1,
                hue: color.hue + (Math.random() - 0.5) * 30,
                saturation: color.saturation + (Math.random() - 0.5) * 25,
                lightness: color.lightness + (Math.random() - 0.5) * 20,
                spin: (Math.random() - 0.5) * 0.01,
                spinAcceleration: 0,
                trail: [],
                maxTrailLength: Math.floor(Math.random() * 3) + 1,
                swarmIndex: -1,
                phase: Math.random() * Math.PI * 2,
                frequency: Math.random() * 0.008 + 0.002,
                energy: Math.random() * 0.8 + 0.2,
                mass: Math.random() * 0.8 + 0.2,
                windResistance: Math.random() * 0.15 + 0.03,
                isSwarmParticle: false,
                driftX: (Math.random() - 0.5) * 0.001,
                driftY: (Math.random() - 0.5) * 0.001
            };

            this.particles.push(particle);
        }
    }

    applySwarmBehavior(particle) {
        if (particle.swarmIndex === -1) {
            return {
                x: particle.driftX,
                y: particle.driftY
            };
        }

        const swarm = this.swarms[particle.swarmIndex];
        let cohesionX = 0, cohesionY = 0, cohesionCount = 0;
        let separationX = 0, separationY = 0;
        let alignmentX = 0, alignmentY = 0, alignmentCount = 0;

        for (let other of swarm.particles) {
            if (other === particle) continue;

            const dx = other.x - particle.x;
            const dy = other.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < swarm.cohesionRadius && distance > 0) {
                cohesionX += other.x;
                cohesionY += other.y;
                cohesionCount++;
            }

            if (distance < swarm.separationRadius && distance > 0) {
                separationX -= dx / distance;
                separationY -= dy / distance;
            }

            if (distance < swarm.cohesionRadius * 0.7 && distance > 0) {
                alignmentX += other.vx;
                alignmentY += other.vy;
                alignmentCount++;
            }
        }

        if (cohesionCount > 0) {
            cohesionX = (cohesionX / cohesionCount - particle.x) * 0.002;
            cohesionY = (cohesionY / cohesionCount - particle.y) * 0.002;
        } else {
            cohesionX = cohesionY = 0;
        }

        separationX *= 0.02;
        separationY *= 0.02;

        if (alignmentCount > 0) {
            alignmentX = (alignmentX / alignmentCount - particle.vx) * 0.005;
            alignmentY = (alignmentY / alignmentCount - particle.vy) * 0.005;
        } else {
            alignmentX = alignmentY = 0;
        }

        swarm.spiralPhase += swarm.spiralSpeed;
        const spiralForceX = Math.cos(swarm.spiralPhase) * 0.003;
        const spiralForceY = Math.sin(swarm.spiralPhase) * 0.003;

        return {
            x: cohesionX + separationX + alignmentX + spiralForceX,
            y: cohesionY + separationY + alignmentY + spiralForceY
        };
    }

    applyWindForces(particle) {
        let totalForceX = 0;
        let totalForceY = 0;

        for (let field of this.windFields) {
            const dx = particle.x - field.x;
            const dy = particle.y - field.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < field.radius) {
                field.direction += field.rotationSpeed;
                field.phase += field.frequency;

                const influence = (1 - distance / field.radius) * field.strength;
                const windStrength = influence * (Math.sin(field.phase) * 0.5 + 1);

                const windX = Math.cos(field.direction) * windStrength;
                const windY = Math.sin(field.direction) * windStrength;

                totalForceX += windX * particle.windResistance;
                totalForceY += windY * particle.windResistance;

                particle.spinAcceleration += influence * 0.005;
            }
        }

        return { x: totalForceX, y: totalForceY };
    }

    updateParticles() {
        this.time += 0.016;
        this.scrollVelocity = (this.scrollY - this.lastScrollY) * 0.1;
        this.lastScrollY = this.scrollY;

        for (let field of this.windFields) {
            field.y += this.scrollVelocity * 0.5;
            field.direction += this.scrollVelocity * 0.01;

            if (field.y < -field.radius) field.y = this.canvas.height + field.radius;
            if (field.y > this.canvas.height + field.radius) field.y = -field.radius;
        }

        for (let swarm of this.swarms) {
            if (Math.abs(this.scrollVelocity) > 0.01) {
                swarm.centerY += this.scrollVelocity * 0.15;
            }

            if (Math.random() < 0.0005) {
                swarm.targetX = Math.random() * this.canvas.width;
                swarm.targetY = Math.random() * this.canvas.height;
            }

            if (Math.abs(this.scrollVelocity) > 0.01 || Math.random() < 0.001) {
                const targetDx = swarm.targetX - swarm.centerX;
                const targetDy = swarm.targetY - swarm.centerY;
                swarm.centerX += targetDx * 0.0003;
                swarm.centerY += targetDy * 0.0003;
            }

            if (swarm.centerY < -200) swarm.centerY = this.canvas.height + 200;
            if (swarm.centerY > this.canvas.height + 200) swarm.centerY = -200;
        }

        for (let particle of this.particles) {
            particle.trail.push({ x: particle.x, y: particle.y, opacity: particle.opacity });
            if (particle.trail.length > particle.maxTrailLength) {
                particle.trail.shift();
            }

            const swarmForce = this.applySwarmBehavior(particle);
            const windForce = this.applyWindForces(particle);

            const scrollEffect = Math.abs(this.scrollVelocity) > 0.01 ? this.scrollVelocity * 0.01 : 0;

            particle.vx += swarmForce.x + windForce.x;
            particle.vy += swarmForce.y + windForce.y + scrollEffect;

            if (Math.abs(this.scrollVelocity) < 0.01) {
                particle.vx *= 0.98;
                particle.vy *= 0.98;
            }

            const maxSpeed = 1.5;
            const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
            if (speed > maxSpeed) {
                particle.vx = (particle.vx / speed) * maxSpeed;
                particle.vy = (particle.vy / speed) * maxSpeed;
            }

            particle.x += particle.vx;
            particle.y += particle.vy;

            particle.spin += particle.spinAcceleration;
            particle.spinAcceleration *= 0.9;

            particle.phase += particle.frequency;
            particle.opacity = particle.baseOpacity * (Math.sin(particle.phase) * 0.3 + 0.7);

            if (particle.x < -50) particle.x = this.canvas.width + 50;
            if (particle.x > this.canvas.width + 50) particle.x = -50;
            if (particle.y < -50) particle.y = this.canvas.height + 50;
            if (particle.y > this.canvas.height + 50) particle.y = -50;
        }
    }

    draw() {
        this.ctx.fillStyle = 'rgba(5, 5, 5, 0.2)'; // Deep Void clear with trail effect
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        for (let particle of this.particles) {
            for (let i = 0; i < particle.trail.length; i++) {
                const point = particle.trail[i];
                const trailOpacity = (i / particle.trail.length) * point.opacity * 0.3;
                const size = particle.size * (i / particle.trail.length) * 0.6;

                this.ctx.fillStyle = `hsla(${particle.hue}, ${particle.saturation}%, ${particle.lightness}%, ${trailOpacity})`;
                this.ctx.beginPath();
                this.ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
                this.ctx.fill();
            }
        }

        for (let particle of this.particles) {
            this.ctx.save();
            this.ctx.translate(particle.x, particle.y);
            this.ctx.rotate(particle.spin);

            const gradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size * 2);
            gradient.addColorStop(0, `hsla(${particle.hue}, ${particle.saturation}%, ${particle.lightness}%, ${particle.opacity})`);
            gradient.addColorStop(0.7, `hsla(${particle.hue}, ${particle.saturation}%, ${particle.lightness}%, ${particle.opacity * 0.3})`);
            gradient.addColorStop(1, 'transparent');

            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(0, 0, particle.size * 2, 0, Math.PI * 2);
            this.ctx.fill();

            this.ctx.fillStyle = `hsla(${particle.hue}, ${Math.min(particle.saturation + 10, 100)}%, ${Math.min(particle.lightness + 10, 100)}%, ${particle.opacity})`;
            this.ctx.beginPath();
            this.ctx.arc(0, 0, particle.size * 0.6, 0, Math.PI * 2);
            this.ctx.fill();

            this.ctx.restore();
        }
    }

    animate() {
        this.updateParticles();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }

    setupEventListeners() {
        window.addEventListener('resize', () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.resizeCanvas();
            this.createWindFields();
            this.createParticleSystem();
            this.createConstellations();
        });

        window.addEventListener('scroll', () => {
            this.scrollY = window.pageYOffset;
        });

        this.canvas.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;

            for (let field of this.windFields) {
                const dx = this.mouse.x - field.x;
                const dy = this.mouse.y - field.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 200) {
                    field.strength += 0.01;
                    field.rotationSpeed += 0.001;
                }
            }
        });
    }
}

window.addEventListener('load', () => {
    new ComplexParticleSystem();
});
