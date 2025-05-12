// Mermaid diyagramını PNG'ye dönüştürmek için Node.js scripti
// Bu script'i kullanmak için aşağıdaki adımları izleyin:
// 1. Node.js yüklü olmalı (https://nodejs.org/)
// 2. Mermaid-CLI'yi yükleyin: npm install -g @mermaid-js/mermaid-cli
// 3. Bu scripti çalıştırın: node export_script.js

const fs = require('fs');
const { execSync } = require('child_process');

// Dosya yolları
const diagramFile = 'prestige_hotel_architecture.md';
const tempFile = 'temp_diagram.mmd';
const outputFile = 'prestige_hotel_architecture.png';

try {
  // 1. Adım: Markdown dosyasının içeriğini oku
  console.log(`Dosya okunuyor: ${diagramFile}`);
  const content = fs.readFileSync(diagramFile, 'utf8');
  
  // 2. Adım: Mermaid kodunu çıkart
  console.log('Mermaid kodu çıkartılıyor...');
  const mermaidRegex = /```mermaid\s*([\s\S]*?)\s*```/;
  const match = content.match(mermaidRegex);
  
  if (!match || !match[1]) {
    throw new Error('Mermaid kodu bulunamadı!');
  }
  
  const mermaidCode = match[1].trim();
  
  // 3. Adım: Geçici .mmd dosyası oluştur
  console.log(`Geçici dosya oluşturuluyor: ${tempFile}`);
  fs.writeFileSync(tempFile, mermaidCode);
  
  // 4. Adım: PNG'ye dönüştür
  console.log('PNG dönüşümü başlıyor...');
  const width = 3000; // Genişlik (piksel)
  const height = 3000; // Yükseklik (piksel)
  
  const command = `mmdc -i ${tempFile} -o ${outputFile} -w ${width} -H ${height} -b transparent`;
  
  execSync(command, { stdio: 'inherit' });
  
  console.log(`\nDönüşüm başarılı! PNG dosyası oluşturuldu: ${outputFile}`);
  console.log(`Çözünürlük: ${width}x${height} piksel`);
  
  // 5. Adım: Geçici dosyayı temizle
  fs.unlinkSync(tempFile);
  console.log('Geçici dosya temizlendi.');
  
} catch (error) {
  console.error('Hata:', error.message);
  
  // Hata olsa bile geçici dosyayı temizlemeye çalış
  try {
    if (fs.existsSync(tempFile)) {
      fs.unlinkSync(tempFile);
      console.log('Geçici dosya temizlendi.');
    }
  } catch (cleanupError) {
    console.error('Geçici dosya temizleme hatası:', cleanupError.message);
  }
  
  process.exit(1);
} 