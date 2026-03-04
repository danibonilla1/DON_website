import sys
import os

try:
    try:
        from pypdf import PdfReader
    except ImportError:
        from PyPDF2 import PdfReader
except ImportError:
    print("Installing pypdf...")
    os.system("pip3 install pypdf --break-system-packages")
    from pypdf import PdfReader

pdf_path = '/Users/dani/Downloads/Guía Profesional_ Emigrar a Suiza - Edición Premium_2026_V2.pdf'
out_path = '/Users/dani/Documents/GitHub/DON_website/suiza/guide_text.txt'

try:
    reader = PdfReader(pdf_path)
    text = ""
    for idx, page in enumerate(reader.pages):
        text += f"--- PAGE {idx+1} ---\n"
        text += page.extract_text() + "\n\n"
        
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(text)
    print("Extracted successfully.")
except Exception as e:
    print(f"Error reading PDF: {e}")
