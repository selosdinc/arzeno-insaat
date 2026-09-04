# Arzeno Project Controls & Consultancy — Website V2.1

`arzeno.tr` için hazırlanmış, GitHub Pages üzerinde doğrudan yayınlanabilen statik web sitesidir.

## Konumlandırma

Arzeno bu sürümde genel inşaat taahhüt firması olarak değil; orta ölçekli yükleniciler ve yatırımcılar için **dış kaynak proje kontrol ofisi** olarak konumlandırılmıştır.

Ana hizmetler:

- Planlama ve iş programı yönetimi (Planning & Scheduling)
- Bütçe ve maliyet kontrolü (Cost Control)
- İlerleme ve kazanılmış değer (Progress & EVM)
- Yönetim raporlaması ve dashboard
- Değişiklik, claim ve gecikme desteği
- Proje kontrol / teknik ofis sistem kurulumu

## GitHub’a yükleme

1. `selosdinc/arzeno-insaat` reposunu açın.
2. Mevcut dosyaları yedeklemek isterseniz önce **Code → Download ZIP** ile indirin.
3. Bu paketin **içindeki tüm dosya ve klasörleri** repo köküne yükleyin. Zip dosyasını veya dış klasörü tek parça olarak yüklemeyin.
4. Değişiklikleri `main` branch’e commit edin.
5. GitHub’da **Settings → Pages** bölümünde yayın kaynağının `main / root` olduğundan emin olun.
6. `Custom domain` alanında `arzeno.tr` yazmalıdır. Kök dizindeki `CNAME` dosyası hazırdır.
7. DNS doğrulandıktan sonra **Enforce HTTPS** seçeneğini açın.

## Ana dosyalar

- `index.html` — Anasayfa
- `hizmetler.html` — Detaylı hizmet kapsamları
- `calisma-modeli.html` — Hedef müşteri ve hizmet modelleri
- `projeler.html` — Kurucunun profesyonel deneyim alanları
- `hakkimizda.html` — Konumlandırma ve kurucu yaklaşımı
- `iletisim.html` — İletişim ve cihazda e-posta/WhatsApp taslağı oluşturan proje brifi
- `gizlilik.html` — Statik site ve iletişim verisi açıklaması
- `404.html` — Hata sayfası
- `assets/css/styles.css` — Tüm tasarım sistemi
- `assets/js/main.js` — Mobil menü, animasyon ve proje brifi davranışı

## İletişim bilgisini değiştirme

Mevcut bilgiler:

- Telefon: `+90 554 182 51 37`
- E-posta: `arzenoinsaat@gmail.com`
- Konum: `Arsuz, Hatay`

Bu bilgiler header/footer, `iletisim.html`, `assets/js/main.js` ve yapılandırılmış veride kullanılır. Toplu değiştirme yapılmalıdır.

## Form hakkında

GitHub Pages sunucu taraflı form çalıştırmadığı için proje brifi:

- Kullanıcının cihazında e-posta taslağı açar veya
- WhatsApp mesajı oluşturur.

Site form verisini saklamaz. İleride gerçek form gönderimi istenirse Formspree, Basin veya özel bir API eklenebilir.

## Görsel ve referans notu

`projeler.html` sayfasında eski projeler şirket referansı olarak sunulmaz. Açık şekilde kurucunun önceki işverenleri bünyesindeki bireysel profesyonel deneyimi olarak tanımlanmıştır. Bu ayrım korunmalıdır.

## Sürüm

V2.1 — Eylül 2026

Bu sürümde masaüstü tasarım korunmuş; mobil görünüm baştan ele alınarak daha kompakt başlık ölçeği, mobil dashboard, tam ekran menü, kısa servis kartları, dikey süreç akışı, iki sütunlu performans kartları ve daha düzenli mobil footer uygulanmıştır.
