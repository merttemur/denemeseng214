# Mermaid Diyagramını Yüksek Kalitede PNG'ye Dönüştürme

Prestige Hotel Reservation mimarisi diyagramını yüksek kaliteli bir PNG görüntüsüne dönüştürmek için aşağıdaki yöntemleri kullanabilirsiniz:

## 1. Mermaid Live Editor Kullanımı (En Kolay Yöntem)

1. [Mermaid Live Editor](https://mermaid.live/)'e gidin
2. `prestige_hotel_architecture.md` dosyasındaki Mermaid kodunu kopyalayın
3. Editöre yapıştırın (sol taraftaki panel)
4. Sağ tarafta diyagramınız görüntülenecek
5. Sağ üst köşedeki "PNG" düğmesine tıklayın
6. İndirilen PNG dosyasını bilgisayarınıza kaydedin

**Avantaj:** Herhangi bir yazılım yüklemeniz gerekmez, çevrimiçi olarak hızlıca yapabilirsiniz.

## 2. VS Code Eklentisi Kullanımı

1. VS Code'da "Markdown Preview Mermaid Support" eklentisini yükleyin
2. `prestige_hotel_architecture.md` dosyasını açın
3. Önizleme moduna geçin (Ctrl+Shift+V veya sağ üstteki önizleme simgesi)
4. Diyagram görüntülendiğinde, sağ tıklayıp "Resmi Farklı Kaydet" seçeneğini kullanabilirsiniz

**Not:** Bazı VS Code eklentileri doğrudan diyagramları dışa aktarma özelliğine sahiptir. "Mermaid Export" veya "SVG Exporter" gibi eklentileri de deneyebilirsiniz.

## 3. Mermaid CLI Kullanımı (En Yüksek Kalite)

Bu yöntem teknik olarak daha karmaşık ancak en yüksek kaliteyi sağlar:

1. Node.js kurulumunuzun olduğundan emin olun
2. Terminal veya komut istemcisinde şu komutu çalıştırın: `npm install -g @mermaid-js/mermaid-cli`
3. Mermaid kodunuzu bir .mmd dosyasına kaydedin
4. Şu komutu çalıştırın:
   ```
   mmdc -i dosya_adi.mmd -o cikti.png -w 2000 -H 2000
   ```
   (Burada 2000x2000 piksel boyutlarında bir PNG oluşturulacak, ihtiyacınıza göre değiştirebilirsiniz)

## 4. Ekran Görüntüsü Alma (Pratik Çözüm)

1. GitHub üzerinden Mermaid diyagramınızı görüntüleyin
2. Tarayıcı penceresini tam boyutlu hale getirin
3. Diyagramın tam ekran görüntüsünü alın (Windows'ta Windows+Shift+S)
4. Görüntüyü bir görüntü düzenleme programında açın ve gerekirse kırpın

## 5. Online Dönüştürücü Servisleri

1. [CodeCogs Mermaid Renderer](https://mermaid.codecogs.com/) gibi servisleri kullanabilirsiniz
2. Mermaid kodunuzu girin ve PNG'ye dönüştürün

## En İyi Sonuç İçin Tavsiyeler

- Mermaid CLI yöntemini kullanırken boyut parametrelerini yüksek tutun (2000x2000 piksel veya daha fazla)
- PNG yerine SVG formatını tercih edin (vektörel format olduğu için ölçeklendirilebilir)
- Karmaşık diyagramları daha büyük boyutlarda dışa aktarın 