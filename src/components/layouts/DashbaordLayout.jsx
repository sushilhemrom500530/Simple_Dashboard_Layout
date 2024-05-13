import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { FcBrokenLink } from "react-icons/fc";
import { MdMenu } from "react-icons/md";
const DashbaordLayout = () => {
    const [isActive, setIsActive] = useState(false);
    const [left, setLeft] = useState(false);

    const handleReverse = () => {
        setIsActive(!isActive);
    };


    const handleToggleLeft = () => {
        setLeft(!left);
    };
    return (
        <div>
            <div className="relative">
                <div className={`z-10 fixed pt-3 bg-white overflow-y-auto min-h-screen px-2 inset-y-0 left-0 transform ${left ? 'w-20 translate-x-[0%] transition-all duration-200 ease-in-out hidden md:hidden lg:block' : 'w-64 transition-all duration-200 ease-in-out'} transition-all duration-200 ease-in-out shadow-xl mt-16 lg:mt-0 border border-blue-800`}>
                    <h1> Logo</h1>
                    {
                        left && <div className="bg-green-700 text-white p-2 w-full hidden lg:block">Menu</div>
                    }
                    {
                        left ? '' : <div className="bg-black text-white ">Long manubar</div>
                    }
                </div>
                <div className={`fixed top-0 bg-green-800 text-white right-0 z-10 flex items-center justify-between h-16  ${left ? 'w-full lg:w-[calc(100%-80px)] transition-all duration-200 ease-in-out' : ' w-full lg:w-[calc(100%-256px)] transition-all duration-200 ease-in-out'} transition-all duration-200 ease-in-out float-right px-5 shadow`}>
                    <div className="w-auto h-full flex items-center justify-center">
                        <button className=" text-white border-e border-e-gray-300 w-16 h-full text-center lg:hidden block"><FcBrokenLink className="text-3xl relative left-1" /></button>
                        <button className=" text-white cursor-pointer p-2 rounded-md" onClick={handleToggleLeft}><MdMenu className="text-3xl" /></button>
                    </div>
                    <div>
                        user Profile
                    </div>

                </div>
            </div>
            {/* <RxCross1 className="text-4xl text-red-500 cursor-pointer" /> */}
            <div onClick={() => setLeft(true)} className={`text-justify ${left ? 'w-full lg:w-[calc(100%-80px)]' : ' w-full lg:w-[calc(100%-256px)]'} pt-[5rem] float-right shadow transition-all duration-200 ease-in-out p-5`}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolores autem suscipit veniam corporis minus id architecto magni, earum ipsam a soluta est et! Ipsum officiis quasi nulla ipsa amet.</p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet quam non perspiciatis unde neque vero, accusantium itaque repudiandae aliquid officia earum officiis id dolore error! Cum unde voluptatibus ea, sunt perspiciatis placeat sint nihil facere praesentium exercitationem quasi rerum iure necessitatibus? Beatae rem quo laudantium soluta nisi exercitationem, explicabo consequuntur aperiam incidunt autem sequi et eligendi illo, harum mollitia! Fugiat in repellendus voluptas illum tempora. Tempore deserunt nihil ex velit et, fugiat illo quibusdam, reprehenderit itaque, culpa rerum rem. Ratione error quaerat doloremque, nesciunt excepturi, ducimus quas, dolores totam labore non eaque ut id! Recusandae at et ab nemo quasi officiis repellendus molestiae inventore non. Quasi aperiam beatae error! Nulla, repellendus illo incidunt earum tempore necessitatibus vel soluta, itaque dolor dicta non rerum culpa minima doloribus in voluptas facere officia et porro accusantium inventore dolore odio pariatur voluptatum. Aspernatur temporibus delectus similique ut nihil adipisci! Laudantium eos sint mollitia, temporibus ipsum dicta dolorem commodi veniam et. Alias, earum. Est quasi molestias commodi libero, corporis atque recusandae dolorem earum esse velit in voluptatem repudiandae omnis error voluptas ipsa consequatur hic beatae explicabo fuga! Optio laborum nisi facere nihil aut, dicta quisquam? Blanditiis dolore architecto error accusamus ipsa maxime porro perspiciatis consequatur ex odio laboriosam, tenetur velit. Necessitatibus accusamus quis nostrum esse itaque recusandae, earum quasi. Mollitia, fugit necessitatibus nihil officia aperiam illo quidem, natus dolor quisquam similique odit provident ratione itaque porro vel voluptas atque tempore modi minima? Dolores necessitatibus magnam eaque consequuntur, debitis saepe labore commodi id in? Velit quos cum atque nam at ratione voluptates ea illum? Fugiat expedita inventore beatae corrupti. Provident dignissimos tenetur, eum ipsam assumenda, ab ipsum delectus similique, neque enim officia id dolores laborum ex quaerat? Rem, itaque magni totam odio perferendis minus vel tenetur. Est, expedita animi ipsam culpa similique suscipit fugiat non dolore cum a nihil aut? Minima, asperiores corporis amet illo, accusantium cupiditate reiciendis distinctio aliquam quis perferendis assumenda adipisci ab omnis reprehenderit sed obcaecati inventore expedita commodi odit. Officia id reiciendis reprehenderit, in sit est, expedita culpa cum dolorum animi temporibus obcaecati necessitatibus perferendis ut. Aperiam, optio sequi! Architecto voluptatibus incidunt explicabo deserunt, in, sapiente dicta obcaecati fugit quibusdam fuga sit quam laboriosam minima reiciendis nam maxime ut quaerat tempora veritatis eos quo, repudiandae veniam atque non! Quasi iure, obcaecati praesentium voluptate esse illum aperiam corporis et ipsum omnis itaque necessitatibus asperiores autem temporibus mollitia provident quo facere pariatur assumenda laborum. Ab commodi non, blanditiis deleniti iste nam rem sed necessitatibus adipisci id autem tempora vero rerum, quasi officia aperiam magni dolorum provident pariatur labore laborum laboriosam. Aut quam architecto, unde corrupti fuga voluptates ratione nostrum earum, modi esse sequi molestiae ad quia inventore incidunt, ut ducimus explicabo animi! Aperiam, repellendus. Voluptatibus, nam similique, eaque inventore dolor iste consectetur natus nisi molestias ex voluptas optio. Molestiae corrupti ipsam aut animi nisi quidem aliquam sed in ullam. Fugit, amet eum deleniti earum enim totam eos ad porro dolor reprehenderit minima sit vero ullam repellendus laudantium? Explicabo numquam quae fugit ipsam? Amet doloremque blanditiis asperiores sit omnis earum dolores. Necessitatibus distinctio saepe rerum asperiores praesentium tempore error accusamus iste tempora, repellat neque veniam omnis dignissimos nesciunt id ex modi sunt sapiente corrupti aliquid rem repudiandae illum laudantium quia? Nostrum beatae saepe error aliquid doloremque earum enim, maxime ad recusandae expedita incidunt labore unde ratione consequuntur laborum modi, itaque eos a voluptate? Rerum, ipsum voluptatibus eligendi id commodi, quasi vel neque dolorem minima inventore molestiae? Soluta ipsa ratione placeat maxime, sequi asperiores commodi accusantium. Dolores fuga vitae molestiae, provident nostrum expedita assumenda quibusdam nulla eaque laborum odit voluptatum esse tempora cumque repellat praesentium! Voluptatibus illum neque quisquam officiis quaerat aperiam atque asperiores ipsa nobis mollitia iusto, autem nam corrupti cum. Facilis officia nihil at, nulla saepe quidem aliquid earum harum facere temporibus perspiciatis sunt quas ducimus eos voluptates odio vel tempora beatae recusandae ea voluptate, magnam fuga itaque sint. Perspiciatis, nemo at ducimus inventore in porro veritatis, quas illo ad officiis maiores non perferendis tempore! Sunt explicabo commodi laboriosam sint odit voluptates ad deserunt. Harum cumque nobis temporibus omnis eius doloremque veniam rerum quidem debitis voluptatibus! Voluptatem consequatur et sint placeat animi dignissimos id atque fugiat quae ipsum temporibus facilis, modi doloremque ad, voluptas laboriosam, repellendus sed enim odio? Rerum provident quia tempore, ducimus unde, illo autem officiis sunt minus, id porro excepturi. Hic, sunt rerum, debitis veniam saepe sed illum nemo dolores nostrum minus alias. Harum itaque cumque rem ipsum sint at natus, architecto porro, facilis sit in voluptates sunt? Fugiat nisi quae vero ducimus hic temporibus eligendi repudiandae distinctio quos doloribus, at a suscipit, neque rem dolore, delectus magni? Vitae dolorum provident alias exercitationem aliquid fuga obcaecati modi cumque eligendi nobis? Velit quisquam officia sint ipsa. Ex quam, facere reprehenderit quia amet, cumque consequatur dignissimos excepturi architecto rerum minus ut, laboriosam tempora voluptate possimus voluptas omnis harum. Nostrum optio odio, est expedita in enim reiciendis natus impedit praesentium excepturi ratione deserunt architecto alias numquam? Aspernatur ad quaerat cupiditate voluptatum ex qui blanditiis velit autem officia explicabo, modi exercitationem tempora est. Explicabo quas, ratione corrupti dignissimos porro asperiores rem repellendus delectus dolorem mollitia voluptatum. Magni dolore non quaerat sequi recusandae sint sit cumque blanditiis earum asperiores ducimus odio praesentium officia fuga quas maxime tenetur, omnis beatae, possimus maiores. Ducimus fugit doloremque repellendus nam voluptas cupiditate inventore, illo, dolore consectetur rerum, dolorem nemo repellat! Laborum explicabo sunt nostrum minima excepturi voluptatibus nobis tenetur soluta mollitia, ullam sed cupiditate, ipsum voluptatem totam numquam saepe incidunt. Similique dolorem atque rerum, quae culpa ab ullam exercitationem nam dolor, aperiam fugiat quaerat nesciunt inventore, obcaecati voluptates sit consectetur accusamus? Dolorem provident dolore sapiente nobis. Esse voluptatem, similique odio nostrum accusamus voluptates, excepturi in maiores, nulla soluta dolorem! Fuga commodi similique repudiandae vel ad vero ut esse, voluptatem ab et sapiente provident iusto aliquam illum est? Dicta incidunt officia laboriosam dolorem voluptates, quidem doloremque sed autem, saepe eligendi laudantium veritatis velit suscipit labore, accusamus quaerat obcaecati numquam iure alias consectetur aspernatur maxime. Perspiciatis possimus doloribus suscipit id, numquam nostrum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dicta atque consequatur ex quo quos ipsam, beatae, amet, numquam ea fugiat! Sit iure quisquam nobis dignissimos voluptatibus provident explicabo vitae eveniet asperiores consequuntur deserunt impedit quia ullam natus suscipit minus, distinctio nihil consequatur dicta id vel. Ipsa, minus. Dignissimos maxime explicabo ipsum, quia sint eveniet repellendus corrupti necessitatibus eos at quod. Ducimus molestias laboriosam, architecto voluptatibus explicabo, suscipit sed aliquid tempore cupiditate ex odit adipisci quam recusandae facilis deleniti magnam. Ipsa autem explicabo, perferendis repudiandae necessitatibus voluptatibus! Error architecto ut minus consequatur qui numquam eveniet adipisci esse facere, rem aut quam similique placeat? Laborum obcaecati velit distinctio accusamus. Quae et esse distinctio laborum at, exercitationem culpa facere repellendus consequuntur itaque ullam nihil aliquid fuga alias? Libero facere fugiat veniam labore possimus ducimus, repudiandae, qui cumque animi sint, numquam sapiente saepe doloribus eligendi. Ipsam iure veritatis sint, amet dignissimos architecto sed est, quisquam aspernatur laudantium totam voluptas modi omnis officia exercitationem blanditiis. Doloremque expedita sequi cumque nobis aut, temporibus in molestiae et nihil debitis optio, blanditiis, autem magni eligendi mollitia maiores quasi praesentium fuga commodi deleniti corporis laboriosam ipsum voluptates? Recusandae harum optio maxime quod, dolor, aliquam esse eius voluptatem, aliquid exercitationem voluptate doloribus. Numquam dignissimos, non animi voluptas ea, eaque dolores aspernatur voluptatum sapiente quis suscipit, iste ex! Repellendus eum, itaque repellat deserunt magni iure iusto. Numquam eius mollitia quae at ex eaque nostrum, laborum quaerat quas velit quia voluptatum enim placeat. Labore aperiam repudiandae molestiae! Eligendi voluptate voluptatum similique molestias asperiores perspiciatis labore, placeat explicabo perferendis saepe excepturi ad ipsam unde, tempore eveniet molestiae quasi, voluptates sunt modi totam quaerat sequi libero quae fugiat. Expedita facere illum, magni blanditiis incidunt deserunt aliquid minus nulla quibusdam dignissimos alias aspernatur quidem debitis? Vero non similique quam porro sequi eveniet itaque doloribus assumenda sed autem voluptatum, tempora voluptatibus ullam officiis omnis id laboriosam ex impedit neque magni corrupti asperiores? Recusandae quod qui a quis saepe quia voluptatum, cupiditate itaque illum aperiam esse excepturi animi deserunt harum asperiores? Error culpa molestiae deleniti neque provident voluptas obcaecati iusto non tempore autem commodi, explicabo vitae illo praesentium consectetur fugit corrupti! Rem et voluptatum assumenda, iure, quisquam ullam doloribus laborum ea suscipit praesentium dolorum inventore consequatur rerum quas. Fuga rem earum maxime tempore, voluptates, sit quae sed aliquid modi nostrum cumque doloribus animi sint, accusamus molestias id est? Quam rem culpa quae consequuntur? Cupiditate consequatur quidem quam modi a dolorem dolores quia officiis aliquam. Soluta autem laudantium facilis nisi error. Perspiciatis dolorum rerum ea est labore itaque culpa nulla excepturi rem, alias necessitatibus unde assumenda dignissimos optio aut atque facilis, sapiente sit tenetur ullam eaque magni odio! Vero architecto eius natus modi. Unde, possimus voluptatem? Totam odit quia velit dolores, tempore sint necessitatibus ullam aliquam, deleniti voluptates libero omnis facere minus laudantium temporibus, vero est. Ut error, impedit nam sint odit laudantium officiis molestias magni, soluta fugiat itaque. A, repellat optio. Illo iusto, ut doloremque nulla obcaecati quis incidunt tempora. Magnam temporibus cupiditate laboriosam ad voluptatem voluptate. Rem fuga libero doloribus quo dolores tenetur officiis explicabo possimus consequuntur similique praesentium voluptatum corrupti ducimus, accusantium, quam dicta, molestias totam est tempora distinctio vitae consequatur! Modi, doloremque! Eligendi reiciendis minima harum officia incidunt qui, deleniti aspernatur explicabo dolorem ut aut quos veritatis, ipsa repellat aliquam! Saepe in quae nihil dolorem aliquam provident sapiente magni quis vero. Ullam incidunt optio enim odio ut ducimus dolorem sed nostrum voluptatibus accusamus, consectetur commodi, sint impedit facere numquam dolor dolore et voluptatum! Iusto nesciunt alias nemo, molestias, tenetur sit enim aliquid eveniet tempora unde delectus! Quae aspernatur blanditiis architecto tempore nobis ipsa facere animi quibusdam dolor eveniet. Voluptatum, earum libero delectus distinctio dolorem, consectetur assumenda soluta odit quaerat veniam placeat vel ipsum impedit inventore consequatur. Odio, vero, laboriosam dolore rem tempore voluptatum incidunt iusto eius sit aperiam fugiat? Natus tempore culpa porro eius quibusdam sed sint odio minus. Illum consequatur nihil itaque, inventore natus maiores corrupti aperiam ratione, iusto delectus ducimus dignissimos laborum optio. Asperiores doloribus quae nihil inventore placeat sequi quis sunt. Iure totam vitae dicta ea illo ut saepe ducimus eveniet aut unde illum at officiis exercitationem facilis, consectetur, non beatae, velit numquam fugiat optio! Qui optio rerum aliquam consequatur eligendi, eius illo odio accusantium harum fuga ducimus, doloremque dolorum quibusdam non consectetur impedit deserunt similique doloribus recusandae porro dolor. Ad ipsum, at dicta voluptatibus accusantium aperiam obcaecati architecto molestiae ratione a rerum nemo ut? Voluptatibus vitae nemo amet dignissimos ullam, nobis sed accusamus id aliquid! Accusantium voluptatem sunt impedit suscipit assumenda minima perferendis iusto voluptates? Nulla et facere a rem aut exercitationem nemo excepturi, consequuntur aspernatur ducimus? Unde quos sed quasi in qui aliquid quidem inventore voluptates cupiditate iure debitis eos ratione sapiente laborum sequi perferendis eveniet quae aliquam, esse dignissimos sunt corrupti quas! Cupiditate officiis, animi dignissimos, itaque id iure vel quas nesciunt sunt sint repellat molestiae, eos maiores fuga magni porro iusto mollitia. Dignissimos rerum voluptatum quas impedit saepe sint magnam architecto temporibus eligendi earum tenetur aspernatur voluptatibus eius, commodi beatae molestias sapiente quisquam. Tempora quidem quaerat quo numquam libero quam doloribus, vel qui odit. Neque maxime debitis numquam blanditiis illum, porro quae harum recusandae ratione, eveniet corporis? Quas eaque quasi voluptates commodi, consectetur corporis assumenda quaerat nobis repellat numquam magnam dolor. Quod facilis quaerat, nesciunt qui cumque, provident exercitationem cum magni ab libero blanditiis quis dolore assumenda asperiores fugit, maxime officiis! Numquam fugit quas mollitia esse ex obcaecati quasi, quos non facere inventore vitae enim harum quidem aliquam cupiditate? Magnam aut, reiciendis quae obcaecati rerum aspernatur corrupti, voluptatibus placeat nostrum culpa nobis, itaque assumenda. Quo, exercitationem eligendi. Repellendus cum alias fuga temporibus accusantium quo incidunt rerum doloremque saepe, ex illum quia tenetur, dolore eaque, numquam recusandae ipsum a unde optio ea sapiente minima facere nisi. Molestiae voluptatibus quis rem neque nihil, nesciunt assumenda quod quia debitis, expedita commodi ullam? Dignissimos repellendus sit suscipit sunt sed aliquid voluptates a rem sint magni alias quod fuga quibusdam tempore accusantium soluta, laboriosam et recusandae inventore minima autem impedit voluptatum!
            </div>
        </div>
    );
};

export default DashbaordLayout;