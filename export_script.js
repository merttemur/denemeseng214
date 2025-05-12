// Mermaid diyagramını PNG'ye dönüştürmek için Node.js scripti
// Bu script'i kullanmak için aşağıdaki adımları izleyin:
// 1. Node.js yüklü olmalı (https://nodejs.org/)
// 2. Aşağıdaki paketleri yükleyin: npm install puppeteer mermaid.cli
// 3. Bu scripti çalıştırın: node export_script.js

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Diyagram dosya yolu
const diagramFile = 'prestige_hotel_architecture.md';
// Çıktı dosya yolu
const outputFile = 'prestige_hotel_architecture.png';

// Mermaid kodunu Markdown dosyasından çıkartma
function extractMermaidCode(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const mermaidRegex = /```mermaid\s*([\s\S]*?)\s*```/;
    const match = content.match(mermaidRegex);
    
    if (match && match[1]) {
      return match[1].trim();
    } else {
      throw new Error('Mermaid kodu bulunamadı.');
    }
  } catch (error) {
    console.error('Dosya okuma hatası:', error.message);
    process.exit(1);
  }
}

// Geçici .mmd dosyası oluşturma
function createTempMermaidFile(code) {
  const tempFile = 'temp_diagram.mmd';
  try {
    fs.writeFileSync(tempFile, code);
    console.log('Geçici Mermaid dosyası oluşturuldu.');
    return tempFile;
  } catch (error) {
    console.error('Geçici dosya oluşturma hatası:', error.message);
    process.exit(1);
  }
}

// mermaid-cli ile PNG dönüşümü
function convertToPNG(inputFile, outputFile) {
  const width = 3000; // Genişlik (piksel)
  const height = 3000; // Yükseklik (piksel)
  
  console.log('Diyagram PNG\'ye dönüştürülüyor...');
  
  const command = `npx mmdc -i ${inputFile} -o ${outputFile} -w ${width} -H ${height} -b transparent`;
  
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Dönüştürme hatası: ${error.message}`);
      return;
    }
    
    if (stderr) {
      console.error(`Hata çıktısı: ${stderr}`);
      return;
    }
    
    console.log(`Diyagram başarıyla PNG'ye dönüştürüldü: ${outputFile}`);
    console.log(`Çözünürlük: ${width}x${height} piksel`);
    
    // Geçici dosyayı temizle
    fs.unlinkSync(inputFile);
    console.log('Geçici dosya temizlendi.');
  });
}

// Ana çalıştırma fonksiyonu
function main() {
  console.log('Mermaid diyagramı dönüştürme başlıyor...');
  const mermaidCode = extractMermaidCode(diagramFile);
  const tempFile = createTempMermaidFile(mermaidCode);
  convertToPNG(tempFile, outputFile);
}

// Scripti çalıştır
main(); 