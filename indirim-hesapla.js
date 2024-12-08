// Ürünlerin fiyatlarını içeren bir array oluştur.
// Kullanıcıdan bir indirim oranı al ve her ürün için indirimli fiyatı hesapla.


let urunler = [
    {
        urunAdi : "Kazak",
        fiyati : 100,
    },
    {
        urunAdi : "Pantolon",
        fiyati : 120,
    },
    {
        urunAdi : "Gömlek",
        fiyati : 110,
    },
    {
        urunAdi : "Ceket",
        fiyati : 200,
    },
]


// Kullanıcıdan bir indirim oranı al
const indirimOrani = Number(prompt("Lütfen indirim oranını yüzde olarak girin (örneğin 20):")).toFixed(2);


  // Her ürün için indirimli fiyatı hesapla
  const indirimliUrunler = [];
  for (const urun of urunler) {
    indirimliUrunler.push({
      urunAdi: urun.urunAdi,
      indirimliFiyati: urun.fiyati - (urun.fiyati * indirimOrani / 100),
    });
  }
  
  // Sonuçları ekrana yazdır
  console.log("İndirimli Fiyatlar: ", indirimliUrunler);

