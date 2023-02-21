<?php

namespace Database\Seeders;

use App\Models\Articles;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ArticlesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Articles::create([
            "title"=> "რა არის ტვიდი?",
            "image"=> "https://cdn.shopify.com/s/files/1/0664/1762/3288/articles/Tvidi_1_1080x.jpg?v=1667230973",
            "description"=> "თუ გსურთ, მდიდრულად და სოლიდურად გამოიყურებოდეთ ტვიდი ამისთვის ყველაზე მარტივი და საუკეთესო გამოსავალია. ეს სწორედ ის უნივერსალური ფაქტურაა, რომელიც სეზონის მიუხედავად აქტუალურობას არ კარგავს, მათ შორის ზამთარშიც, როდესაც ძალიან ცივა და ყველა გაურბის მოკლე ქვედაბოლოებისა თუ შორტების მორგებას, ტვიდი აქაც მშველელად მოევლინა მინი ქვედების მოყვარულებს, რადგანაც ძაფების მჭიდრო მდგომარეობისაგან შექმნილი სამოსი საკმაოდ თბილი გამოდგა და ამავდროულად მოხდენილიც - ზამთრის ფეხსაცმელებთან და კოლგოტებთან. ამასთან, ის მაღალი ხარისხის,ლამაზი და მოდური ქსოვილია, რომელიც გამოირჩევა ფერთა დიდი პალიტრით.ტვიდი უხეში კვანძოვანი შალის ქსოვილია, რომელიც ძაფების გადაბმის სხვადასხვა მიმართულებით იქმნება, სწორედ ამიტომ მისი ფერთა მრავალფეროვნება ქსოვილის კვანძებშიც გვხვდება. მაღალი თუ კომერციული მოდა სულ უფრო ხშირად წარადგენს ტვიდისგან შექმნილ პიჯაკებს. ქსოვილის პოპულარობამ მისგან შექმნილი სამოსის მრავალფეროვნებაც გამოიწვია, ახლა უკვე ვხვდებით ტვიდის ქვედაბოლოებს, შარვლებს, ბლუზებს, შორტებს და აქსესუარებს.",
            "user_id"=> 1,
            "category"=> "Fashion",
            "views"=> 5,
        ]);
        Articles::create([
            "title"=> "კაფსულის გარდერობი?",
            "image"=> "https://cdn.shopify.com/s/files/1/0664/1762/3288/articles/kapsulis_garderobi_1080x.jpg?v=1667813581",
            "description"=> "შენი გარდერობი სავსეა ტანსაცმლით და მაინც არ იცი რა ჩაიცვა?; როგორც იქნა გადაწყვეტ რას მოირგებ და შერჩეული სამოსი არ უხდება ერთმანეთს?; ვერ აბალანსებ შენი ლუქის ფერებს და ფიქრობ, რომ პრობლემა შენს მიერ შერჩეულ  სამოსშია?შენ მარტო არ ხარ და სწორედ ამ პრობლემების გადასაჭრელად, 1970-იან წლებში ჩნდება ტერმინი, კაფსულის გარდერობი, რომელიც ლონდონის ერთ-ერთი ბუტიკის მფლობელს, სუზი ფოს სახელს უკავშირდება. კონცეფცია 1985 წელს დიზაინერმა დონა კარანიმ გამოიყენა თავისი პირველი კაფსულის კოლექციისთვის, სახელწოდებით, კოლექციაში შედიოდა - შავი ბოდე, ქვედაბოლო, ქურთუკი, კაბა, ტყავის შარვალი, თეთრი პერანგი და ქაშმირის სვიტერი. კარანის კონცეფცია გათვლილი იყო ოფისში მომუშავე ქალზე, რომელიც დილიდან საღამომდე გასულია სახლიდან.კაფსულის გარდერობი არის ტანსაცმლის კოლექცია, რომლის ყველა ერთეული ჰარმონიზებულია ფერსა და ხაზში, ის შედგება რამდენიმე უნივერსალური და აუცილებელი ელემენტისგან, რომლებიც ენაცვლებიან ერთმანეთს და ნებისმიერი კომბინაციის შემთხვევაში ქმნიან დახვეწილ და უპრეტენზიო ლუქს. ეს კონცეფცია გთავაზობთ შეიძინოთ სამოსი, რომელსაც გამოიყენებთ ნებისმიერ სიტუაციაში.ჩვენ დაგეხმრებით დაზოგო დრო და ხარჯები. ერთად შევქმნათ შენი კომფორტისა და ჰარმონიის საწყისი - მინიმალისტური გარდერობი. კაფსულის გარდერობის შესაქმნელად დაგჭირდება რამდენიმე აუცილებელი და მუდმივი ნივთი, ნეიტრალური ფერის (თეთრი, შავი, კრემისფერი, ყავისფერი, ნაცრისფერი), ქსოვილისა (პრინტის გარეშე) და სტილის (განსაკუთრებული დიზაინის გარეშე) სამოსი.",
            "user_id"=> 1,
            "category"=> "Fashion",
            "views"=> 12,
                      
        ]);
        Articles::create([
           "title"=> "28-წლიანი ტანჯვის ამბავი და მესის შესრულებული მისია",
            "image"=> "https://static.europop.ge/public/styles/article_header/public/2022-12/tato%20mtavari.jpg?W_ksS4tr2matQpk9LDJJgkAkr.6noMWp&itok=5OERsBz9",
            "description"=> "არგენტინის ნაკრებს 1994 წლიდან ვგულშემატკივრობ… სულ პატარა ვიყავი, ალბათ 8-9 წლის, როდესაც მამაჩემმა, რომელიც მთელი ცხოვრება ბრაზილიას ქომაგობს, 1986 წლის მსოფლიოს ჩემპიონატზე გადაღებულ ფილმს მაყურებინა. ფილმის მთავარი მოქმედი პირი, რა თქმა უნდა, დიეგო მარადონა იყო, რომლის თამაშმაც, ინგლისის თუ ბელგიის კარში გატანილმა გოლებმა და არგენტინის გამარჯვებამ ჩემზე იმხელა შთაბეჭდილება მოახდინა, რომ სადღაც ერთ წელიწადში, მსოფლიოს ჩემპიონატის წინ გადავწყვიტე, რომ არგენტინისკენ ვიქნებოდი.აქედან დაიწყო ერთი დიდი ტკივილის და ტანჯვის ისტორია - მარადონას დისკვალიფიკაცია და მარცხი რუმინეთთან; დენის ბერგკამპის გოლი 1998 წელს; ჯგუფში ჩარჩენა უძლიერესი გუნდით 2002 წელს; ძალიან საწყენი მარცხი გერმანიასთან, პენალტების სერიაში, 2006 წელს; იმავე გერმანიასთან უშანსოდ განადგურება 2010-ში და 4 წლის შემდეგ, ალბათ ყველაზე მტკივნეული მარცხი ფინალში. პლუს 2018 წელს, სრულიად მოშლილი და არეული გუნდის გავარდნა მერვედფინალში, ასევე მთელი ამ წლების განმავლობაში კოპა ამერიკის რამდენიმე წაგებული ფინალი… მოკლედ, არგენტინის ქომაგობა ტკივილთან, იმედგაცრუებასთან და წაგებასთან იყო გაიგივებული.2002 წელი. არგენტინის ნაკრებმა ჯგუფური ეტაპი ვერ გადალახა. გაბრიელ ბატისტუტას უკან შვედები ზეიმობენ 2002 წელი. არგენტინის ნაკრებმა ჯგუფური ეტაპი ვერ გადალახა. გაბრიელ ბატისტუტას უკან შვედები ზეიმობენ
            ყველაფერი 2021 წელს შეიცვალა, როცა ჩემი გულშემატკივრობის 27 წლის თავზე, არგენტინამ პირველი ტიტული (ორი მოგებული ოლიმპიადა და ახალგაზრდული მსოფლიოს ჩემპიონატები ეროვნული გუნდის ტიტულები არაა) მოიგო, როდესაც კოპა ამერიკის ფინალში დი მარიას გოლით ბრაზილია დაამარცხა. რამდენიმე თვეში არგენტინამმოიგო, 2022 წლის 18 დეკემბერს კი - მსოფლიოს ჩემპიონატი.
            ჩემი 28-წლიანი, ხოლო არგენტინელების 36-წლიანი ლოდინი დასრულდა - “ალბისელესტე” მსოფლიოს ჩემპიონი გახდა.",
            "user_id"=> 2,
            "category"=> "Sports",
            "views"=> 45,
        ]);
        Articles::create([
           "title"=> "Kristin Harila Continues Pursuit of 8000-Meter Speed Record",
            "image"=> "https://adventureblog.net/wp-content/uploads/2022/08/kristin-harilla-k2.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1",
            "description"=> "A few weeks back, we told you about Norweigan climber Kristin Harila and her attempt to break Nims Purjas speed record for climbing all 14 8000-meter peaks. At the time, Harila was coming off of a very successful spring climbing season in Nepal, during which she summited six of the worlds highest mountains in just 29 days. When we wrote about her efforts, Kristin had arrived in Pakistan and was already continuing the pursuit of her goals. In fact, as of early July she had already nabbed her seventh eight-thousander by topping out on Nanga Parbat. Fast forward a month and she now stands on the edge of making history, although before she can do that, she faces some logistical challenges that may prove impossible to overcome.When last we checked in with Kristin Harila, she was in base camp on K2, the second highest mountain in the world. At the time, she was waiting for an opportunity to go up that peaks highly technical slopes, but the fixed ropes hadnt been put into place yet. It took a few more weeks for everything to come together, but when it did it resulted in a record-breaking summer on the “Savage Mountain.” Harila was a part of that rush, completing her attempt on July 22.",
            "user_id"=> 3,
            "category"=> "Adventure",
            "views"=> 56,
        ]);
        Articles::create([
           "title"=> "It Has Been a Record-Setting Summer on K2",
            "image"=> "https://adventureblog.net/wp-content/uploads/2022/07/k2-savage-mt.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1",
            "description"=> "While the spring belongs to Everest, the summer is all about K2. The world’s second highest peak always takes center stage in July and August and this year has been no different. But it has been a record-setting climbing season on this formidable mountain, which seems to be going through a significant transformation.Since it was first successfully summited back in 1954, K2 has had a reputation of being a “mountaineer’s mountain.” At 8610 meters (28,250 ft), the peak is just 238 meters (781 feet) shorter than Everest but is far more challenging to climb. The ascent is steeper and much more technical, which limited the number of climbers to complete that climb to a select few for decades. While Everest has frequently been climbed by alpinists who weren’t considered “elite,” K2 was always the realm of the best mountaineers in the world.While K2’s slopes remain daunting, there is no denying that the peak has been tamed—at least to a degree. In recent years, we’ve seen an increasing number of commercial teams on the mountain each summer—something that was almost unheard of just a decade ago. And while it isn’t quite as crowded as Everest just yet, this year’s numbers are eye-opening. On July 22, 145 people reached the summit, completely shattering the previous record.",
            "user_id"=> 3,
            "category"=> "Adventure",
            "views"=> 5,
        ]);
        Articles::create([
           "title"=> "ზიზუს მაგია, მეცნიერება და ზებუნებრივი ძალები",
            "image"=> "https://static.europop.ge/public/styles/article_header/public/2022-10/popsport%20%E1%83%93%E1%83%98%E1%83%93%E1%83%98.psd%20zizu.png?MaTJK4RyLJticaHlHn5sFOmRKMVPj3tr&itok=bwxakuD7",
            "description"=> "ზიზუს თამაში მეცნიერება იყო. მისი ამოუცნობი ხასიათი, იდუმალება და ზებუნებრივი ძალები იმ რიტუალების ერთობლიობას ქმნიდა, რომელიც მაგიურ ძალმოსილებას იძენდა. 2006 წელი. გერმანიის დედაქალაქ ბერლინში მსოფლიოს ჩემპიონატის ფინალისთვის ემზადებიან. საფეხბურთო სამყარო წლის ყველაზე მნიშვნელოვანი მატჩის მოლოდინშია. ტურნირის გადამწყვეტ შეხვედრაში ერთმანეთს პრინციპული მეტოქეები, საფრანგეთი და იტალია უპირისპირდებიან. ზინედინ ზიდანი თავის ბრწყინვალე კარიერას ასრულებს. “სკუადრა აძურა” კი 24 წლის შემდეგ მსოფლიოს ჩემპიონობას მეორედ მიუახლოვდა.ზიზუს მაგია, მეცნიერება და ზებუნებრივი ძალები ფინალს საოცარი აფიშა ჰქონდა, ყველაფერი ჰოლივუდური სცენარით ვითარდებოდა. მახსოვს, თამაშის წინა ღამეს დაძინება ძალიან გამიჭირდა, ვნერვიულობდი. მიჭირდა იმის დაჯერება, რომ ჩემი საფეხბურთო გმირი მოედანზე უკანასკნელად გავიდოდა. ზოგადად, ჩემპიონატის წინ საფრანგეთის ნაკრებს ფავორიტად არავინ მიიჩნევდა. იმდროინდელი მთავარი ვარსკვლავები ერთ სამხრეთამერიკულ გუნდში გაერთიანდნენ და გულშემატკივრები სწორედ მათ ტრიუმფს ელოდნენ, თუმცა “მამლებს” შემადგენლობაში კულტურული ანთროპოლოგიის წარმომადგენელი ჰყავდათ, პერსონაჟი, რომელიც ბრონისლავ მალინოვსკის შემოქმედებას ჰგავდა.",
            "user_id"=> 2,
            "category"=> "Sports",
            "views"=> 22,
            
        ]);
        Articles::create([
           "title"=> "როგორ გამოვაცხვე იდეალური პური პურის საცხობში",
            "image"=> "https://gemrielia.ge/media/_thumb/uploads/2023/01-25/puris-sacxobi-1674632255.webp",
            "description"=> "ბოლო დროს სულ უფრო და უფრო მეტი ადამიანი აცხობს პურს სახლში. ამისათვის დღეების განმავლობაში კვებავენ ბუნებრივ საფუარს, არჩევენ სპეციალურ ფქვილს, უმატებენ სანელებლებს და ა.შ. თუმცა უფრო მარტივი გამოსავალიც არსებობს - ქარხნული საფუარი და პურის საცხობი აპარატი.დღეს პურის საცხობ აპარატს საკმაოდ ბევრი ოჯახი იყენებს. ყველა აპარატს მოჰყვება რეცეპტებიც და მოხმარების ინსტრუქციაც, თუმცა ზოგს ეკარგება, ზოგს ენის ბარიერი უშლის ხელს წაკითხვაში, ზოგს კი უბრალოდ მეტი რჩევა სჭირდება იდეალური შედეგის მისაღებად.იმისთვის, რომ მაქსიმალურად კარგი პური გამოაცხოთ, საჭიროა გარკვეული ნიუანსების ცოდნა და მარტივი წესების დაცვა. გამომცხვარი პურის გემო და ხარისხი დამოკიდებულია ტემპერატურაზე, ტენიანობაზე, ინგრედიენტების ხარისხზე, სწორ დოზირებაზე, თვით აპარატზე და სხვა.ბოლო დროს სულ უფრო და უფრო მეტი ადამიანი აცხობს პურს სახლში. ამისათვის დღეების განმავლობაში კვებავენ ბუნებრივ საფუარს, არჩევენ სპეციალურ ფქვილს, უმატებენ სანელებლებს და ა.შ. თუმცა უფრო მარტივი გამოსავალიც არსებობს - ქარხნული საფუარი და პურის საცხობი აპარატი.დღეს პურის საცხობ აპარატს საკმაოდ ბევრი ოჯახი იყენებს. ყველა აპარატს მოჰყვება რეცეპტებიც და მოხმარების ინსტრუქციაც, თუმცა ზოგს ეკარგება, ზოგს ენის ბარიერი უშლის ხელს წაკითხვაში, ზოგს კი უბრალოდ მეტი რჩევა სჭირდება იდეალური შედეგის მისაღებად.იმისთვის, რომ მაქსიმალურად კარგი პური გამოაცხოთ, საჭიროა გარკვეული ნიუანსების ცოდნა და მარტივი წესების დაცვა. გამომცხვარი პურის გემო და ხარისხი დამოკიდებულია ტემპერატურაზე, ტენიანობაზე, ინგრედიენტების ხარისხზე, სწორ დოზირებაზე, თვით აპარატზე და სხვა.",
            "user_id"=> 4,
            "category"=> "Food",
            "views"=> 3,
        ]);
        Articles::create([
           "title"=> "როგორ გავაწყოთ 2023 წლის საახალწლო სუფრა",
            "image"=> "https://gemrielia.ge/media/uploads/2022/12-28/sufra-1672235912.jpg",
            "description"=> "ახალი წელი ერთ-ერთი ყველაზე ამაღელვებელი დღესასწაულია. თუკი გინდათ ამ წელს ყველაფერი ლამაზად გქონდეთ და თან უახლესი ტენდენციებიც გაითვალისწინოთ, მაშინ სტატია ბოლომდე წაიკითხეთ.
            ფერთა გამა
            ასტროლოგიური კალენდრით შთაგონებული დიზაინერები ყოველ წელს ახალ, საინტერესო იდეებს გვაწვდიან საახალწლო სუფრის მორთულობასთან დაკავშირებთ, გვიზიარებენ ახალ ტენდენციებს, რაც დღესასწაულს უფრო ფერადსა და კაშკაშას ხდის. წლევანდელ ტენდენციებს რომ გადავავლოთ თვალი, საკმაოდ მრავალფეროვან ფერთა პალიტრას შევამჩნევთ. კვლავ აქტუალური რჩება კლასიკური ფერთა შეხამება - წითელი, მწვანე და ოქროსფერი. ეს ფერები საახალწლო ტენდენციებში მკვეთრად არის ჩაწერილი და მას გვერდს ვერ ავუვლით. წელს აქტუალურია ასევე ლურჯი ტონები - ბაცი ცისფრიდან მუქ ლურჯამდე, რომელიც კარგად ეხამება თეთრსა და ვერცხლისფერს. მწვანე თუ მარადმწვანე, წიწვოვან ხეებთან ასოცირდება, ვერცხლისფერი ცივ ზამთარში მთვარით განათებული, თოვლიანი გარემოს ასოციაციას ტოვებს და ზამთრის დღესასწაულს ძალიან უხდება.
            სუფრა
            სუფრა შეიძლება ავარჩიოთ ჭრელი და ასევე თეთრი, აქ საკითხი შემდეგნაირად დგას: ჭრელ სუფრას სადა ჭურჭელი უნდა შევურჩიოთ, თორემ, შედეგად უგემოვნო სიჭრელეს მივიღებთ, თეთრი ან ერთი ტონის გადასაფარებელი კი საშუალებას იძლევა, სუფრა გავაწყოთ ფერადი ჭურჭლითა და აქსესუარებით. შეიძლება მონოქრომატული გამის შერჩევაც, სადაც ჩართული იქნება სუფრაც, ხელსაწმენდებიც და ჭურჭელიც, თუმცა დიდი სიფრთხილით უნდა მოვეკიდოთ ამ საკითხს - შესაძლოა ერთფეროვანი და მოსაწყენი დიზაინი მივიღოთ.",
            "user_id"=> 4,
            "category"=> "Food",
            "views"=> 53,
        ]);
        Articles::create([
           "title"=> "The Atacama Desert – Barren… yet beautiful",
            "image"=> "https://i.natgeofe.com/n/4c363dfb-f2c7-4a89-9547-a06318a87fc5/valley-moon-atacama-desert-chile_4x3.jpg",
            "description"=> "There are those of us who prefer the verdant greens, the lush vegetation, abundant colorful flowers, and a plethora of animal life. While we have come to enjoy these types of venues, we also love to admire the desolate, bleak, stark and wind-swept environs of the desert. This seemingly inhospitable environment possesses its own beauty but displays it differently. Sunrise and sunset are particularly enjoyable.
            Now, this is one dry desert. Wait….what does that mean? Well, technically by definition a desert is an area of land that receives less than 10 inches (25cm) of rain per year. Pretty dry, yeah? Well, the Atacama is the second driest desert in the world, bested only by a patch of land in Antarctica. The Atacama Desert is the result of the actions of the Humboldt Current off the coast and the position of the land in between the Andes and the Chilean Coast Range mountains which are tall enough to literally shut out moisture by creating a two-sided rain shadow. Anecdotally, we were told of an area of this desert that had not seen rain in over 29,000 years. In other words, seriously 
            We love Flamingos!We love Flamingos!
            We love Flamingos!
            Nice reflection. Dave did a great job!
            dry. There is so little precipitation so that over time the surface has built up a crusty layer of salts, which only further discourages life.
            We went because we’ve read and heard about the beauty of the desert and certainly were not disappointed. A two-hour flight from Santiago to Calama and then a one-hour transfer will find you in San Pedro de Atacama, the jumping off point for many desert adventures. Calama is an interesting place as it is the center of mining for Chile, which is the world’s largest producer of copper and the second largest producer of lithium. The whole city is built around mining and people come from far away to work here. With so little to do outside of work, you can guess that imbibing in alcohol and seeking women of the night are large industries. Calama was much larger city than we were expecting. The money to be made working in the mines draws people from all over the country to come here. Enterprising people have built several casinos to provide entertainment. It makes you wonder how much of all that hard earned money makes it back home to the family?",
            "user_id"=> 5,
            "category"=> "Travel",
            "views"=> 244,
        ]);
    }
}
