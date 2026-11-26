export const languageNames = { en: 'English', fr: 'Français', 'zh-Hans': '简体中文', ar: 'العربية', es: 'Español', de: 'Deutsch' };
export const ogLocales = { en: 'en_US', fr: 'fr_FR', 'zh-Hans': 'zh_CN', ar: 'ar_SA', es: 'es_ES', de: 'de_DE' };

const keys = [
  'Home','About the group','Business areas','Contact','From Hong Kong to the world','Skip to content',
  'Discuss a project','View all business areas','Our businesses and commitments','Explore this area','Explore','Learn more',
  'Previous slide','Next slide','Pause','Play','Pause slideshow','Play slideshow',
  'Full name','Email address','Organisation','Subject','Message','Choose a subject','Business enquiry','Partnership','Other enquiry','Send',
  'Open the draft in your email app','Draft to copy','Overview','Propose a partnership','Illustrative photograph','Illustrative photography',
  'Our group','Who we are','Legal information','Site language','High contrast','Main navigation','Priority areas','Back to top',
  'On this page','Have a question?','Contact FANGYS with any questions about this website.','Have a business enquiry or a partnership proposal?',
  'Contact FANGYS for business enquiries and partnership proposals.','These areas outline the group’s proposed portfolio.',
  'FANGYS CORPORATION LIMITED is a Hong Kong company operating in Europe, Asia, the United States and Africa.',
  'FANGYS CORPORATION LIMITED is registered in Hong Kong. Learn about the group and the business areas in its portfolio.',
  'Sending…','Your message has been sent.','Enquiry from fangys.hk','The message was not sent. You can email the draft to info@fangys.hk.',
];

const ui = {
  'zh-Hans': [
    '首页','集团简介','业务领域','联系','立足香港，面向全球','跳转至主要内容','洽谈项目','查看全部业务','业务与社会承诺','了解此业务','了解详情','了解更多',
    '上一张','下一张','暂停','播放','暂停轮播','播放轮播',
    '姓名','电子邮箱','机构','主题','留言','选择主题','商务咨询','合作','其他咨询','发送',
    '在邮件应用中打开草稿','可复制的草稿','概览','提出合作建议','示意照片','示意照片',
    '集团','关于我们','法律信息','网站语言','高对比度','主导航','重点领域','返回顶部',
    '本页目录','有疑问？','如对本网站有疑问，请联系 FANGYS。','有商务咨询或合作建议？',
    '如有商务咨询或合作建议，请联系 FANGYS。','以下是集团的业务布局。',
    'FANGYS CORPORATION LIMITED 是一家香港公司，业务遍及欧洲、亚洲、美国和非洲。',
    'FANGYS CORPORATION LIMITED 在香港注册。了解集团及其业务领域。',
    '正在发送…','您的留言已发送。','来自 fangys.hk 的咨询','留言未发送。您可以将草稿发送至 info@fangys.hk。',
  ],
  ar: [
    'الرئيسية','عن المجموعة','مجالات الأعمال','اتصل بنا','من هونغ كونغ إلى العالم','انتقل إلى المحتوى',
    'ناقش مشروعًا','عرض جميع الأعمال','أعمالنا والتزاماتنا','اكتشف هذا المجال','اكتشف','اعرف المزيد',
    'الشريحة السابقة','الشريحة التالية','إيقاف مؤقت','تشغيل','إيقاف العرض مؤقتًا','تشغيل عرض الشرائح',
    'الاسم الكامل','البريد الإلكتروني','المؤسسة','الموضوع','الرسالة','اختر موضوعًا','استفسار تجاري','شراكة','استفسار آخر','إرسال',
    'افتح المسودة في تطبيق البريد','مسودة للنسخ','نظرة عامة','اقترح شراكة','صورة توضيحية','صور توضيحية',
    'مجموعتنا','من نحن','معلومات قانونية','لغة الموقع','تباين عالٍ','القائمة الرئيسية','المجالات ذات الأولوية','العودة إلى الأعلى',
    'في هذه الصفحة','هل لديك سؤال؟','تواصل مع FANGYS بشأن أي سؤال عن الموقع.','هل لديك استفسار تجاري أو اقتراح شراكة؟',
    'تواصل مع FANGYS للاستفسارات التجارية ومقترحات الشراكة.','فيما يلي مجالات أعمال المجموعة.',
    'FANGYS CORPORATION LIMITED شركة من هونغ كونغ تعمل في أوروبا وآسيا والولايات المتحدة وأفريقيا.',
    'FANGYS CORPORATION LIMITED مسجلة في هونغ كونغ. تعرف على المجموعة ومجالات أعمالها.',
    'جارٍ الإرسال…','تم إرسال رسالتك.','استفسار من fangys.hk','لم تُرسل الرسالة. يمكنك إرسال المسودة إلى info@fangys.hk.',
  ],
  es: [
    'Inicio','Sobre el grupo','Áreas de negocio','Contacto','De Hong Kong al mundo','Ir al contenido','Hablemos de su proyecto','Ver todas las áreas de negocio','Nuestros negocios y compromisos','Descubrir esta área','Descubrir','Más información',
    'Diapositiva anterior','Diapositiva siguiente','Pausa','Reproducir','Pausar la presentación','Reproducir la presentación',
    'Nombre completo','Correo electrónico','Organización','Asunto','Mensaje','Elija un asunto','Consulta comercial','Colaboración','Otra consulta','Enviar',
    'Abrir el borrador en su aplicación de correo','Borrador para copiar','Descripción general','Proponer una colaboración','Fotografía ilustrativa','Fotografías ilustrativas',
    'Nuestro grupo','Quiénes somos','Información legal','Idioma del sitio','Alto contraste','Navegación principal','Áreas prioritarias','Volver arriba',
    'En esta página','¿Tiene alguna pregunta?','Contacte con FANGYS si tiene preguntas sobre este sitio.','¿Tiene una consulta comercial o una propuesta de colaboración?',
    'Contacte con FANGYS para consultas comerciales y propuestas de colaboración.','Estas son las áreas de negocio del grupo.',
    'FANGYS CORPORATION LIMITED es una empresa de Hong Kong que opera en Europa, Asia, Estados Unidos y África.',
    'FANGYS CORPORATION LIMITED está registrada en Hong Kong. Conozca el grupo y sus áreas de negocio.',
    'Enviando…','Su mensaje se ha enviado.','Consulta desde fangys.hk','El mensaje no se ha enviado. Puede enviar el borrador a info@fangys.hk.',
  ],
  de: [
    'Startseite','Über die Gruppe','Geschäftsbereiche','Kontakt','Von Hongkong in die Welt','Zum Inhalt springen','Ein Projekt besprechen','Alle Geschäftsbereiche ansehen','Unsere Geschäftsbereiche und unser Engagement','Diesen Bereich entdecken','Entdecken','Mehr erfahren',
    'Vorherige Folie','Nächste Folie','Pause','Abspielen','Diashow pausieren','Diashow abspielen',
    'Vollständiger Name','E-Mail-Adresse','Organisation','Betreff','Nachricht','Betreff auswählen','Geschäftsanfrage','Partnerschaft','Sonstige Anfrage','Senden',
    'Entwurf im E-Mail-Programm öffnen','Entwurf zum Kopieren','Überblick','Eine Partnerschaft vorschlagen','Beispielfoto','Beispielfotos',
    'Unsere Gruppe','Wer wir sind','Rechtliche Informationen','Sprache der Website','Hoher Kontrast','Hauptnavigation','Schwerpunktbereiche','Nach oben',
    'Auf dieser Seite','Haben Sie eine Frage?','Bei Fragen zur Website wenden Sie sich an FANGYS.','Haben Sie eine Geschäftsanfrage oder einen Vorschlag für eine Partnerschaft?',
    'Kontaktieren Sie FANGYS für Geschäftsanfragen und Partnerschaftsvorschläge.','Diese Bereiche bilden das Geschäftsportfolio der Gruppe.',
    'FANGYS CORPORATION LIMITED ist ein Unternehmen aus Hongkong, das in Europa, Asien, den USA und Afrika tätig ist.',
    'FANGYS CORPORATION LIMITED ist in Hongkong registriert. Lernen Sie die Gruppe und ihre Geschäftsbereiche kennen.',
    'Wird gesendet…','Ihre Nachricht wurde gesendet.','Anfrage von fangys.hk','Die Nachricht wurde nicht gesendet. Sie können den Entwurf per E-Mail an info@fangys.hk senden.',
  ],
};
for (const [lang, values] of Object.entries(ui)) {
  if (values.length !== keys.length) throw new Error(`Invalid labels for ${lang}`);
}
const media = {
  'zh-Hans': ['水处理设备','收割机械','医疗仪器和耗材','太阳能和风能设施','仓储与采购','网络基础设施与布线','酒店大堂和餐厅','港口集装箱与公路运输','维多利亚港的香港夜景','配有电脑和电话的工作空间','网站'],
  ar: ['معدات معالجة المياه','آلات زراعية أثناء الحصاد','أدوات ومستلزمات طبية','منشآت شمسية ورياح','التخزين والتوريد في المستودعات','البنية التحتية للشبكات والكابلات','ردهة فندق وصالة مطعم','حاويات ونقل بري في الميناء','أفق هونغ كونغ ليلًا عبر ميناء فيكتوريا','مساحة عمل مع حاسوب وهاتف','موقع إلكتروني'],
  es: ['Equipos de tratamiento de agua','Maquinaria agrícola durante la cosecha','Instrumentos y consumibles médicos','Instalaciones solares y eólicas','Almacenamiento y abastecimiento en almacén','Infraestructura de red y cableado','Vestíbulo de hotel y comedor','Contenedores y transporte terrestre en un puerto','Vista nocturna de Hong Kong desde Victoria Harbour','Espacio de trabajo con ordenador y teléfono','Sitio web'],
  de: ['Anlagen zur Wasseraufbereitung','Landmaschinen bei der Ernte','Medizinische Instrumente und Verbrauchsmaterialien','Solar- und Windanlagen','Lagerung und Beschaffung','Netzwerkinfrastruktur und Verkabelung','Hotellobby und Restaurant','Hafencontainer und Straßentransport','Hongkongs Skyline bei Nacht am Victoria Harbour','Arbeitsplatz mit Laptop und Telefon','Website'],
};
const mediaKeys = ['Water treatment equipment','Farm machinery during harvest','Medical instruments and supplies','Solar and wind installations','Warehouse storage and procurement','Network infrastructure and cabling','Hotel lobby and restaurant dining room','Port containers and road transport','Hong Kong’s skyline at night across Victoria Harbour','Workspace with a laptop and phone','Website'];
export const translate = (lang, key) => ui[lang]?.[keys.indexOf(key)] ?? media[lang]?.[mediaKeys.indexOf(key)] ?? key;

export const businesses = {
  'zh-Hans': [
    ['水处理与卫生','水处理、过滤及专业卫生解决方案。'],['农业与农业产业','农业生产以及原料和半成品采购。'],
    ['医疗健康','按需采购医疗设备和耗材。'],['能源','太阳能、风能和混合能源解决方案及能源产品。'],
    ['贸易与采购','为企业按需寻找和采购产品。'],['数字技术、电信与金融科技','网络连接、视频发布和汇款项目。'],
    ['酒店与餐饮','酒店、餐厅和酒吧项目。'],['运输与物流','支持货物流通的运输与物流服务。'],
    ['FANGYS 基金会','关注健康、教育及基本服务的可及性。'],['医疗布草洗涤','面向医疗机构的专业洗涤设备。'],
  ],
  ar: [
    ['المياه والنظافة','معالجة المياه والترشيح وحلول النظافة المهنية.'],['الزراعة والأعمال الزراعية','الإنتاج الزراعي وتوريد المنتجات الخام وشبه المصنعة.'],
    ['الصحة','توريد المعدات والمستلزمات الطبية حسب الطلب.'],['الطاقة','حلول الطاقة الشمسية وطاقة الرياح والطاقة الهجينة، ومنتجات الطاقة.'],
    ['التجارة والتوريد','البحث عن المنتجات وتوريدها للشركات حسب الطلب.'],['التقنية والاتصالات والتقنية المالية','مشاريع الاتصال ونشر الفيديو وتحويل الأموال.'],
    ['الفنادق والمطاعم','مشاريع الفنادق والمطاعم والحانات.'],['النقل والخدمات اللوجستية','خدمات النقل واللوجستيات لدعم حركة البضائع.'],
    ['مؤسسة FANGYS','مجالات اهتمام تشمل الصحة والتعليم والوصول إلى الخدمات الأساسية.'],['مغاسل المنشآت الصحية','معدات غسيل مهنية لمنشآت الرعاية الصحية.'],
  ],
  es: [
    ['Agua e higiene','Tratamiento del agua, filtración y soluciones de higiene profesional.'],['Agricultura y agroindustria','Producción agrícola y suministro de productos en bruto o semielaborados.'],
    ['Salud','Equipos y consumibles médicos bajo pedido.'],['Energía','Soluciones solares, eólicas e híbridas y productos energéticos.'],
    ['Comercio y abastecimiento','Búsqueda y adquisición de productos bajo pedido para empresas.'],['Tecnología, telecomunicaciones y fintech','Proyectos de conectividad, publicación de vídeos y transferencias de dinero.'],
    ['Hostelería y restauración','Proyectos de hoteles, restaurantes y bares.'],['Transporte y logística','Servicios para facilitar el movimiento de mercancías.'],
    ['Fundación FANGYS','Áreas de compromiso en salud, educación y acceso a servicios esenciales.'],['Lavandería sanitaria','Equipos profesionales de lavandería para centros sanitarios.'],
  ],
  de: [
    ['Wasser und Hygiene','Wasseraufbereitung, Filtration und professionelle Hygienelösungen.'],['Landwirtschaft und Agrarwirtschaft','Landwirtschaftliche Erzeugung und Beschaffung von Roh- und Halbfertigprodukten.'],
    ['Gesundheit','Medizinische Geräte und Verbrauchsmaterialien auf Bestellung.'],['Energie','Solar-, Wind- und Hybridlösungen sowie Energieprodukte.'],
    ['Handel und Beschaffung','Produktsuche und Beschaffung für Unternehmen auf Anfrage.'],['Digitales, Telekommunikation und Fintech','Projekte für Konnektivität, Videoveröffentlichung und Geldtransfers.'],
    ['Hotellerie und Gastronomie','Hotel-, Restaurant- und Barprojekte.'],['Transport und Logistik','Transport- und Logistikleistungen für den Warenverkehr.'],
    ['FANGYS-Stiftung','Engagement für Gesundheit, Bildung und den Zugang zu grundlegenden Dienstleistungen.'],['Wäscherei im Gesundheitswesen','Professionelle Wäschereiausrüstung für Gesundheitseinrichtungen.'],
  ],
};

export const details = {
  'zh-Hans': [
    '涵盖水处理、过滤和专业卫生。咨询 BWT 解决方案时，请说明水质、流量和用途。',
    '为企业按需采购。请提供产品、数量、规格和交货地点。',
    '为医疗机构及专业人员按需采购设备和耗材。请提供产品型号、数量和目的地。',
    '拟关注母婴健康、女童教育以及水和能源的可及性。有意合作的机构可说明地点、需求和目标。',
    '涵盖太阳能、风能和混合能源方案。咨询时请说明场地、用途及功率需求。',
    '为医疗机构提供专业布草洗涤解决方案。咨询 Alliance Laundry Systems 旗下 Primus 设备时，请注明洗涤量、洗涤程序和安装条件。',
  ],
  ar: [
    'يشمل المجال معالجة المياه والترشيح والنظافة المهنية. عند الاستفسار عن حلول BWT، حدد جودة المياه والتدفق والاستخدام.',
    'توريد المنتجات حسب الطلب للشركات. يرجى ذكر المنتج والكمية والمواصفات ووجهة التسليم.',
    'توريد المعدات والاستهلاكات الطبية حسب الطلب للمنشآت والمتخصصين. اذكر المراجع والكميات والوجهة.',
    'تشمل المجالات المقترحة صحة الأم والطفل وتعليم الفتيات والوصول إلى المياه والطاقة. يمكن للمؤسسات المهتمة بالشراكة توضيح الموقع والاحتياجات والأهداف.',
    'حلول شمسية ورياح وهجينة. يرجى وصف الموقع والاستخدام واحتياجات الطاقة عند الاستفسار.',
    'حلول غسيل مهنية للمنشآت الصحية. عند الاستفسار عن معدات Primus من Alliance Laundry Systems، حدد أحجام الغسيل والدورات وشروط التركيب.',
  ],
  es: [
    'El área abarca el tratamiento del agua, la filtración y la higiene profesional. Para consultar sobre soluciones BWT, indique la calidad del agua, el caudal y el uso previsto.',
    'Abastecimiento bajo pedido para empresas. Indique el producto, las cantidades, las especificaciones y el destino.',
    'Equipos y consumibles bajo pedido para centros y profesionales sanitarios. Incluya las referencias, las cantidades y el destino.',
    'Las líneas propuestas incluyen la salud maternoinfantil, la educación de las niñas y el acceso al agua y a la energía. Las entidades interesadas pueden indicar el lugar, las necesidades y los objetivos de su propuesta.',
    'Soluciones solares, eólicas e híbridas. Describa la ubicación, el uso previsto y las necesidades de potencia al realizar su consulta.',
    'Lavandería profesional para centros sanitarios. Para consultar sobre equipos Primus de Alliance Laundry Systems, indique el volumen de ropa, los ciclos y las condiciones de instalación.',
  ],
  de: [
    'Der Bereich umfasst Wasseraufbereitung, Filtration und professionelle Hygiene. Geben Sie bei Anfragen zu BWT-Lösungen Wasserqualität, Durchfluss und Einsatzzweck an.',
    'Beschaffung auf Bestellung für Unternehmen. Geben Sie Produkt, Mengen, Spezifikationen und Lieferort an.',
    'Medizinische Geräte und Verbrauchsmaterialien auf Bestellung. Nennen Sie Artikelreferenzen, Mengen und Lieferziel.',
    'Zu den vorgesehenen Schwerpunkten zählen die Gesundheit von Müttern und Kindern, Mädchenbildung sowie der Zugang zu Wasser und Energie. Interessierte Organisationen können Ort, Bedarf und Ziele ihres Vorschlags nennen.',
    'Solar-, Wind- und Hybridlösungen. Beschreiben Sie bei Ihrer Anfrage den Standort, die Nutzung und den Leistungsbedarf.',
    'Professionelle Wäschereilösungen für Gesundheitseinrichtungen. Geben Sie bei Anfragen zu Primus-Geräten von Alliance Laundry Systems Wäschemengen, Waschprogramme und Installationsbedingungen an.',
  ],
};
