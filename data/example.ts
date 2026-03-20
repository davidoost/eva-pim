const example = {
  SystemID: "eva-pim", // we can hardcode this
  DownloadImagesInBackground: true, // should always be true
  LayerName: "eva-pim-import-base", // we should hardcode this
  AllowEmptyMedia: true, // should always be false
  Products: [
    {
      ID: "NL-10401123",
      Name: "Kleurrijk voorjaar",
      TaxCode: "Samengestelde Boeketten",
      Content: [
        {
          PublicationStatuses: ["public"],
          Name: "Kleurrijk voorjaar",
          ShortDescription:
            "Haal het voorjaar in huis met een stijlvol en kleurrijk boeket dat direct een vrolijke sfeer creëert.",
          LongDescription:
            "Haal het voorjaar in huis met een stijlvol en kleurrijk boeket dat direct een vrolijke sfeer creëert. Met een speelse mix van bloemen zoals tulpen, anemonen en ranonkels in verschillende tinten brengt dit boeket de energie en kleur van de lente naar binnen.Of je nu op zoek bent naar een sfeervolle blikvanger of een bijzonder cadeau, dit boeket is altijd een goede keuze. De levendige kleuren en mooiste seizoensbloemen zorgen voor een frisse en stijlvolle toevoeging aan ieder interieur. Tip: voeg een bijpassende vaas toe, zodat het boeket direct klaar is om neer te zetten en de ontvanger er geen omkijken meer naar heeft.",
          Images: [
            {
              ImageUrl:
                "https://www.fleurop.nl/cdn-cgi/image/width%3D920%2Cquality%3D90/media/34/f8/71/1769496707/59a4213294aaef264c93032b03e7e8291c167311-boeket-kleurrijk-voorjaar-middel.jpg",
              IsPrimaryImage: true,
            },
            {
              ImageUrl:
                "https://www.fleurop.nl/cdn-cgi/image/width%3D920%2Cquality%3D90/media/16/06/2f/1769496721/1aed8e56812eaccf1c33a86833b674f863dd1a05-boeket-kleurrijk-voorjaar-sfeer.jpg",
            },
            {
              ImageUrl:
                "https://www.fleurop.nl/cdn-cgi/image/width%3D920%2Cquality%3D90/media/75/03/51/1769496726/4b06e0e48214e80ba90fc169475148869ffd48c1-boeket-kleurrijk-voorjaar-sfeerbeeld.jpg",
            },
          ],
        },
      ],
      Variations: {
        Property: "size",
        LogicalLevel: "size",
        Products: [
          {
            ID: "NL-10401123-1",
            Name: "Kleurrijk voorjaar - Klein",
            VariationValues: [
              {
                Value: "Klein",
              },
            ],
          },
          {
            ID: "NL-10401123-2",
            Name: "Kleurrijk voorjaar - Middel",
            VariationValues: [
              {
                Value: "Middel",
              },
            ],
          },
          {
            ID: "NL-10401123-3",
            Name: "Kleurrijk voorjaar - Groot",
            VariationValues: [
              {
                Value: "Groot",
              },
            ],
          },
        ],
      },
    },
  ],
};
