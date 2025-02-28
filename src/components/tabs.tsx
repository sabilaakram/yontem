import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabData = [
  {
    value: "militaryinstitutions",
    label: "Military Institutions",
    content: [
      "T.C. Deniz Kuvvetleri Komutanlığı Karamürselbey Eğitim Merkezi",
      "Balıkesir Bakım Okulu ve Eğitim Merkezi",
      "Hava Lojistik Komutanlığı",
      "Jandarma İkmal Komutanlığı",
      "Kara Kuvvetleri Komutanlığı",
      "Jandarma Komando Tugayı",
      "Polis Okulu",
    ],
  },
  {
    value: "universities",
    label: "Universities",
    content: [
      "ODTÜ (Middle East Technical University)",
      "TÜBİTAK (The Scientific and Technological Research Council of Turkey)",
      "HAVELSAN (Defense Industry Company)",
      "İstanbul Üniversitesi (Istanbul University)",
      "İstanbul Teknik Üniversitesi (Istanbul Technical University)",
      "Yıldız Teknik Üniversitesi (Yıldız Technical University)",
      "Konya Selçuk Üniversitesi (Selçuk University)",
      "Piri Reis Üniversitesi (Piri Reis University)",
      "Nişantaşı Üniversitesi (Nişantaşı University)",
      "Gedik Üniversitesi (Gedik University)",
      "Kayseri Erciyes Üniversitesi (Erciyes University)",
      "Bandırma Onyedi Eylül Üniversitesi (Bandırma Onyedi Eylul University)",
      "Kocaeli Üniversitesi (Kocaeli University)",
      "Muğla Sıtkı Koçman Üniversitesi (Muğla Sıtkı Koçman University)",
    ],
  },
  {
    value: "highschools",
    label: "High Schools",
    content: [
      "Fatsa Mesleki ve Teknik Anadolu Lisesi",
      "Piri Reis Mesleki ve Teknik Anadolu Lisesi",
      "Pendik Barbaros Hayrettin Paşa Mesleki ve Teknik Anadolu Lisesi",
      "Beykoz Barbaros Hayrettin Paşa Mesleki ve Teknik Anadolu Lisesi",
      "Hacı Rahime Ulusoy Piri Reis Mesleki ve Teknik Anadolu Lisesi",
      "H.M.B. Ulusoy Mesleki ve Teknik Anadolu Lisesi",
      "İzmir Çeşme Ulusoy Mesleki ve Teknik Anadolu Lisesi",
      "İzmir Nevvar Salih İşgören Mesleki ve Teknik Anadolu Lisesi",
      "İzmir Güzelbahçe İ.M.K.B. Mesleki ve Teknik Anadolu Lisesi",
      "İzmir Şehit İdare Ataşeh Çağlar Yücel Mesleki ve Teknik Anadolu Lisesi",
      "İzmir Çınarlı Mesleki ve Teknik Anadolu Lisesi",
      "Fetta Tamince Mesleki ve Teknik Anadolu Lisesi",
      "Pakmaya Kenan Kaptan Mesleki ve Teknik Anadolu Lisesi",
      "Trabzon Çarşıbaşı Mesleki ve Teknik Anadolu Lisesi",
      "Hereke Nuh ve Çimento Mesleki ve Teknik Anadolu Lisesi",
      "Eskişehir Sabiha Gökçen Mesleki ve Teknik Anadolu Lisesi",
      "İstanbul Sabiha Gökçen Mesleki ve Teknik Anadolu Lisesi",
      "Bursa Hürriyet Mesleki ve Teknik Anadolu Lisesi",
      "Bağcılar Mesleki ve Teknik Anadolu Lisesi",
      "Melikgazi Mesleki ve Teknik Anadolu Lisesi",
      "Konya Ereğli Fatih Mesleki ve Teknik Anadolu Lisesi",
      "Gazi Mesleki ve Teknik Anadolu Lisesi",
      "Hezarfen Ahmet Çelebi Mesleki ve Teknik Anadolu Lisesi",
      "Şehit Polis Demet Sezen Mesleki ve Teknik Anadolu Lisesi",
      "Özel Dolmabahçe Okulları",
      "Çayeli A.H.İ. Mesleki ve Teknik Anadolu Lisesi",
      "Bursa Gemlik Mesleki ve Teknik Anadolu Lisesi",
      "Bursa Mimarsinan Mesleki ve Teknik Anadolu Lisesi",
      "Çanakkale Biga Mesleki ve Teknik Anadolu Lisesi",
      "İstanbul Küçükyalı Mesleki ve Teknik Anadolu Lisesi",
      "Ankara Sincan Mesleki ve Teknik Anadolu Lisesi",
      "Ankara Güvercinlik Mesleki ve Teknik Anadolu Lisesi",
      "Edirne Keşan Mesleki ve Teknik Anadolu Lisesi",
      "Lüleburgaz Mesleki ve Teknik Anadolu Lisesi",
    ],
  },
  {
    value: "govt",
    label: "Govt. Institutions",
    content: [
      "Milli Eğitim Bakanlığı (Ministry of National Education)",
      "Orman Bakanlığı (Ministry of Forestry)",
      "Ümraniye Belediyesi (Ümraniye Municipality)",
      "Bağcılar Belediyesi (Bağcılar Municipality)",
    ],
  },
];

export function TabsComponent() {
  return (
    <Tabs defaultValue={tabData[0].value} className="w-full">
      {/* Scrollable TabsList */}
      <div className="w-full overflow-x-auto lg:overflow-x-visible pl-[200px] md:pl-0 lg:pl-0">
        <TabsList className="flex lg:grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 whitespace-nowrap gap-2 scroll-snap-x-mandatory">
          {tabData.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="min-w-max scroll-snap-start"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {/* Dynamically Generate Tab Contents */}
      {tabData.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <ul className="lg:pl-6 md:pl-4 pl-2 list-disc font-gilroy font-[400] text-[16px] md:text-[18px] lg:text-[24px] lg:leading-[36px] md:leading-[28px] leading-[20px] pt-6">
            {tab.content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </TabsContent>
      ))}
    </Tabs>
  );
}
