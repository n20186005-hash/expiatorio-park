const fs = require('fs');
const path = require('path');

const locales = ['zh', 'en', 'es'];

const translations = {
  zh: {
    historyTimeline: {
      title: "Templo Expiatorio：瓜达拉哈拉的标志",
      items: [
        {
          title: "历史渊源",
          description: "赎罪圣殿（Templo Expiatorio）的历史可以追溯到19世纪，当时成立了一个特别委员会负责其建设。在瓜达拉哈拉大主教佩德罗·洛萨·帕尔达韦的指导下，著名的意大利建筑师阿达莫·博阿里（Adamo Boari）的设计脱颖而出。建设始于1897年，由于墨西哥革命引起的经济危机等原因，直到1972年才最终完成，历时75年。"
        },
        {
          title: "新哥特式风格",
          description: "赎罪圣殿是新哥特式风格的宏伟代表，主要使用雕刻石头建造。其巨大的木门、青铜雕像和令人印象深刻的彩色玻璃窗引人注目。特别是其带音乐钟琴的德国制造时钟：每天上午9点、中午12点和下午6点，十二使徒雕像会随着钟声出现。它被认为是墨西哥新哥特式建筑的杰作。"
        },
        {
          title: "宗教与美食的交汇",
          description: "赎罪圣殿不仅提供精神体验；其广场也是一个充满活力的地方，拥有丰富的娱乐和美味的餐饮选择。在这里，您可以品尝糕点、玉米、清凉饮料、墨西哥卷饼等。此外，步行几步还可以探索艺术博物馆（MUSA），或在瓜达拉哈拉大学的电影论坛欣赏电影。"
        },
        {
          title: "为何称为“赎罪圣殿”？",
          description: "虽然其官方名称是圣体大教堂（Basílica del Santísimo Sacramento），但在1906年被赋予了“赎罪（Expiatorio）”的名称，以举行赎罪仪式，寻求对罪恶的补偿。人们常说，如果您来到这座“西方明珠”却没有参观赎罪圣殿，就仿佛未曾来过瓜达拉哈拉。"
        }
      ]
    },
    basicInfo: {
      addressValue: "Col Americana, Americana, 44160 Guadalajara, Jalisco, 墨西哥",
      plusCodeValue: "MJFR+6C 瓜达拉哈拉 墨西哥哈利斯科州"
    },
    intro: {
      description: "Expiatorio Park（赎罪圣殿公园）位于墨西哥哈利斯科州瓜达拉哈拉的 Col Americana 社区。这是一个美丽的城市公园，毗邻宏伟的赎罪圣殿，为游客提供了一个放松身心、享受文化与美食的绝佳场所。"
    },
    mapSection: {
      subtitle: "Col Americana, Americana, 44160 Guadalajara, Jalisco, 墨西哥"
    }
  },
  en: {
    historyTimeline: {
      title: "Templo Expiatorio: An Icon of Guadalajara",
      items: [
        {
          title: "History of the Expiatorio",
          description: "The history of the Templo Expiatorio dates back to the 19th century. Under the direction of Archbishop Pedro Loza y Pardavé, the project by prominent Italian architect Adamo Boari was selected. Construction began in 1897 and was not completed until 1972, taking 75 years due to the Mexican Revolution and economic crises."
        },
        {
          title: "A Neo-Gothic Masterpiece",
          description: "The temple is a magnificent example of Neo-Gothic style, built mainly with carved stone. A particularly striking feature is its German-made clock with a musical carillon; every day at 9 a.m., 12 p.m., and 6 p.m., figures of the twelve apostles emerge. It is considered a masterpiece of Neo-Gothic architecture in Mexico."
        },
        {
          title: "A Religious and Gastronomic Gathering",
          description: "The Expiatorio offers more than a spiritual experience; its esplanade is a vibrant place full of entertainment and delicious food options. You can enjoy pastries, elotes, tacos, and more. A few steps away, you can also explore the Museum of the Arts (MUSA)."
        },
        {
          title: "Why is it called Expiatorio?",
          description: "Although its official name is the Basilica of the Blessed Sacrament, it was given the name 'Expiatorio' in 1906 for ceremonies of expiation. It is said that if you visit the Pearl of the West and do not stop by the Expiatorio, it is as if you were never here."
        }
      ]
    },
    basicInfo: {
      addressValue: "Col Americana, Americana, 44160 Guadalajara, Jalisco, Mexico",
      plusCodeValue: "MJFR+6C Guadalajara, Jalisco, Mexico"
    },
    intro: {
      description: "Expiatorio Park is located in the Col Americana neighborhood of Guadalajara, Jalisco, Mexico. It is a beautiful urban park adjacent to the magnificent Templo Expiatorio, offering visitors a great place to relax and enjoy culture and gastronomy."
    },
    mapSection: {
      subtitle: "Col Americana, Americana, 44160 Guadalajara, Jalisco, Mexico"
    }
  },
  es: {
    historyTimeline: {
      title: "Templo Expiatorio: Un Ícono de Guadalajara",
      items: [
        {
          title: "La Historia del Expiatorio",
          description: "La historia del Templo Expiatorio se remonta al siglo XIX. Bajo la dirección del arzobispo Pedro Loza y Pardavé, el proyecto del destacado arquitecto italiano Adamo Boari fue seleccionado. La construcción comenzó en 1897 y no se completó hasta 1972, lo que equivale a 75 años de trabajo debido a la Revolución Mexicana."
        },
        {
          title: "Un Templo de Estilo Neogótico",
          description: "El Templo Expiatorio es un magnífico ejemplo del estilo neogótico, construido principalmente con piedra tallada. Un aspecto particularmente llamativo es su reloj de origen alemán; cada día a las 9 a.m., 12 p.m. y 6 p.m., figuras de los doce apóstoles emergen. Es considerada la obra maestra del neogótico en México."
        },
        {
          title: "Un Encuentro Religioso y Gastronómico",
          description: "El Expiatorio no solo ofrece una experiencia espiritual; su explanada también es un lugar vibrante lleno de entretenimiento y una oferta gastronómica deliciosa. Aquí puedes disfrutar de pasteles, elotes, tacos y opciones veganas. A pocos pasos, puedes explorar el Museo de las Artes (MUSA)."
        },
        {
          title: "¿Por Qué se Llama Expiatorio?",
          description: "Aunque su nombre oficial es la Basílica del Santísimo Sacramento, se le atribuyó el nombre de “Expiatorio” en 1906 para realizar ceremonias de expiación. Se dice que si vienes a la Perla Tapatía y no pasas por el Expiatorio, es como si no hubieras estado aquí."
        }
      ]
    },
    basicInfo: {
      addressValue: "Col Americana, Americana, 44160 Guadalajara, Jalisco, México",
      plusCodeValue: "MJFR+6C Guadalajara, Jalisco, México"
    },
    intro: {
      description: "Parque Expiatorio se encuentra en la colonia Americana de Guadalajara, Jalisco, México. Es un hermoso parque urbano adyacente al magnífico Templo Expiatorio, ofreciendo a los visitantes un excelente lugar para relajarse y disfrutar de la cultura y la gastronomía."
    },
    mapSection: {
      subtitle: "Col Americana, Americana, 44160 Guadalajara, Jalisco, México"
    }
  }
};

locales.forEach(locale => {
  const filePath = path.join(__dirname, 'src', 'messages', `${locale}.json`);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Update historyTimeline
    data.historyTimeline.title = translations[locale].historyTimeline.title;
    data.historyTimeline.items = translations[locale].historyTimeline.items;
    
    // Update basicInfo
    if(data.basicInfo) {
      data.basicInfo.addressValue = translations[locale].basicInfo.addressValue;
      data.basicInfo.plusCodeValue = translations[locale].basicInfo.plusCodeValue;
    }
    
    // Update intro
    if(data.intro) {
      data.intro.description = translations[locale].intro.description;
    }

    // Update mapSection
    if(data.mapSection) {
      data.mapSection.subtitle = translations[locale].mapSection.subtitle;
    }
    
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Updated ${locale}.json`);
  }
});
