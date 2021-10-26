
import {useState} from "react"
 import "./App.css";

function App() {
   
   const [data, setData] = useState([
    {
      name: "indian chief dark horse",
      price: "21,135 $",
      type: 'cruiser',
      image:
        "https://cdn.dealerspike.com/imglib/v1/800x600/imglib/Assets/Inventory/D6/E4/D6E44D7A-0662-4F39-B067-7E9F90B82383.jpg",
      disc: "aggressive styling covered in black finishes. The Dark Horse family features blacked-out, aggressive styling that will have you begging to hit the road. BLACKED-OUT STYLE. If you like to spend your time polishing chrome, keep looking.",
    },
    {
      name: "indian scout bobber",
      price: "21,135 $",
      type: 'cruiser',
      image:
        "https://www.cycleworld.com/resizer/ufv3sMNshn_6PdGU9bzjTVQsFk4=/1440x0/smart/cloudfront-us-east-1.images.arcpublishing.com/octane/EEQPGHHOCZBT3KNAJBPXRQFY4M.jpg",
      disc: "Indian Scout Bobber Motorcycle. This cruiser includes a liquid cooled V-Twin engine and 6-speed transmission making it great for beginners.",
    },
    {
      name: "Harley-Davidson Iron 883",
      price: "21,135 $",
      type: 'cruiser',
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB37p6ku6Zo93ZL4_B4HjYdGePK0hKLlVe3A&usqp=CAU",
      disc: "If you are a diehard Harley fan and you refuse to ride any other brand of bikes, then this is still not a good motorcycle for you as a beginner. The main reasons why the Iron 883 isnt great for amateurs is due to its performance.",
    },
    {
      name: "harley davidson sportster S",
      price: "10,135 $",
      type: 'cruiser',
      image:
        "https://www.cycleworld.com/resizer/ToLn2UjeyyAwedAIo2mhO6V71ZM=/1440x0/filters:focal(997x640:1007x650)/cloudfront-us-east-1.images.arcpublishing.com/octane/O6THQTD6DBHLXPSCAUODIABXUE.jpg",
      disc: "the legendary Sportster family is meaningful precisely because it’s a symbol. A 45-degree air-cooled pushrod engine, classic cruiser styling, that Milwaukee sound: They’re real, valuable, and necessary, because they’re the soul of Harley-Davidson.",
    },
    {
      name: "harley davidson fat bob",
      price: "21,135 $",
      type: 'cruiser',
      image:
        "https://www.motorcycle.com/blog/wp-content/uploads/2017/08/083117-Harley-Davidson-Fat-Bob-9949.jpg",
      disc: "The Fat Bob motorcycle features aggressive, unapologetic styling, mind-blowing performance and handling, premium finishes",
    },
    {
      name: "harley davidson roadster",
      price: "13,135 $",
      type: 'cruiser',
      image:
        "https://2yrh403fk8vd1hz9ro2n46dd-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/2020-Harley-Davidson-Roadster-Buyers-Guide-Specs-Prices-3.jpg",
      disc: " Sportster models are designated in Harley-Davidsons product code by beginning with XL. In 1952, the predecessors to the Sportster",
    },
    {
      name: "triumph trident 660",
      price: "21,135 $",
      type: 'cruiser',
      image:
        "https://scalethumb.leparking.fr/unsafe/331x248/smart/https://cloud.leparking-moto.fr/2021/05/15/09/11/triumph-trident-triumph-trident-660-silver-ice-diablo-red-2021-new-motorcycle-for-sale-in-dieppe_151399831.jpg",
      disc: "The new Trident 660 is an accessible urban roadster that combines beautiful urban style with thrilling triple engine performance.",
    },
    {
      name: "triumph rocket 3 R",
      price: "21,135 $",
      type: 'cruiser',
      image:
        "https://images.hindustantimes.com/auto/img/2020/09/10/600x338/20200904051653_Rocket-3-GT_1599718914445_1599718921043.jpg",
      disc: "Triumphs big-bore three-cylinder cruiser, the Rocket 3, has been completely redesigned. Engine capacity is up from 2,294cc to 2458cc further cementing the massive Brit bikes title as the worlds largest-displacement production motorcycle.",
    },
    {
      name: "triumph bonneville speedmaster",
      price: "12,135 $",
      type: 'cruiser',
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS8WLAKJXky9MNKuag_mfa6ZTy6M95uFK-833JI3jahpKARrSUxzdjDuH0483-0-HbjM4&usqp=CAU",
      disc: "The Triumph Speedmaster is a cruiser that pulls heavily from its fellow Bonneville brothers: the 1,200cc parallel twin taken from the Bonneville T120 to the Bonneville Bobbers classic ride-alone",
    },
    {
      name: "triumph thruxton",
      price: "11,135 $",
      type: 'cruiser',
      image: "https://i.ytimg.com/vi/r5uz02yLSGc/maxresdefault.jpg",
      disc: "Like the rest of the British motorcycle industry, Triumph went out of business by the 1980s. But the brand was resurrected in the 1990s by British industrialist John Bloor who has built a lineup of cutting-edge sportbikes to nostalgia-themed throwbacks",
    },
  
    {
      name: "B r1250gs",
      price: "21,135 $",
      type: 'touring',
      image:
        "https://i.pinimg.com/736x/71/d2/de/71d2dedfdb8d24a6fc998e6c23e3d09e.jpg",
      disc: "aggressive styling covered in black finishes. The Dark Horse family features blacked-out, aggressive styling that will have you begging to hit the road. BLACKED-OUT STYLE. If you like to spend your time polishing chrome, keep looking.",
    },
    {
      name: "Ducati Multistrada 1260",
      price: "21,135 $",
      type: 'touring',
      image:
        "https://www.bikescatalog.com/wp-content/uploads/2020/07/Multistrada-1260-S-DAIR-2018-Ducati-Motorcycle-View-1.jpg",
      disc: "Indian Scout Bobber Motorcycle. This touring includes a liquid cooled V-Twin engine and 6-speed transmission making it great for beginners.",
    },
    {
      name: "2020 Ducati Diavel",
      price: "21,135 $",
      type: 'touring',
      image:
        "https://i.ytimg.com/vi/DiFZDQCTOCI/maxresdefault.jpg",
      disc: "it's a fantastic performance cruiser. But because its Testastretta V-twin is in other models it fails to be such an event. You can still have tremendous fun on the Diavel and its chassis is remarkably agile, but it doesn't have the 'Wow' factor you get on the Rocket 3.",
    },
    {
      name: "harley davidson sportster S",
      price: "10,135 $",
      type: 'touring',
      image:
        "https://www.cycleworld.com/resizer/ToLn2UjeyyAwedAIo2mhO6V71ZM=/1440x0/filters:focal(997x640:1007x650)/cloudfront-us-east-1.images.arcpublishing.com/octane/O6THQTD6DBHLXPSCAUODIABXUE.jpg",
      disc: "the legendary Sportster family is meaningful precisely because it’s a symbol. A 45-degree air-cooled pushrod engine, classic touring styling, that Milwaukee sound: They’re real, valuable, and necessary, because they’re the soul of Harley-Davidson.",
    },
    {
      name: "harley davidson fat bob",
      price: "21,135 $",
      type: 'touring',
      image:
        "https://www.motorcycle.com/blog/wp-content/uploads/2017/08/083117-Harley-Davidson-Fat-Bob-9949.jpg",
      disc: "The Fat Bob motorcycle features aggressive, unapologetic styling, mind-blowing performance and handling, premium finishes",
    },
    {
      name: "harley davidson roadster",
      price: "13,135 $",
      type: 'touring',
      image:
        "https://2yrh403fk8vd1hz9ro2n46dd-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/2020-Harley-Davidson-Roadster-Buyers-Guide-Specs-Prices-3.jpg",
      disc: " Sportster models are designated in Harley-Davidsons product code by beginning with XL. In 1952, the predecessors to the Sportster",
    },
    {
      name: "triumph trident 660",
      price: "21,135 $",
      type: 'touring',
      image:
        "https://scalethumb.leparking.fr/unsafe/331x248/smart/https://cloud.leparking-moto.fr/2021/05/15/09/11/triumph-trident-triumph-trident-660-silver-ice-diablo-red-2021-new-motorcycle-for-sale-in-dieppe_151399831.jpg",
      disc: "The new Trident 660 is an accessible urban roadster that combines beautiful urban style with thrilling triple engine performance.",
    },
    {
      name: "triumph rocket 3 R",
      price: "21,135 $",
      type: 'touring',
      image:
        "https://images.hindustantimes.com/auto/img/2020/09/10/600x338/20200904051653_Rocket-3-GT_1599718914445_1599718921043.jpg",
      disc: "Triumphs big-bore three-cylinder touring, the Rocket 3, has been completely redesigned. Engine capacity is up from 2,294cc to 2458cc further cementing the massive Brit bikes title as the worlds largest-displacement production motorcycle.",
    },
    {
      name: "triumph bonneville speedmaster",
      price: "12,135 $",
      type: 'touring',
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS8WLAKJXky9MNKuag_mfa6ZTy6M95uFK-833JI3jahpKARrSUxzdjDuH0483-0-HbjM4&usqp=CAU",
      disc: "The Triumph Speedmaster is a touring that pulls heavily from its fellow Bonneville brothers: the 1,200cc parallel twin taken from the Bonneville T120 to the Bonneville Bobbers classic ride-alone",
    },
    {
      name: "triumph thruxton",
      price: "11,135 $",
      type: 'touring',
      image: "https://i.ytimg.com/vi/r5uz02yLSGc/maxresdefault.jpg",
      disc: "Like the rest of the British motorcycle industry, Triumph went out of business by the 1980s. But the brand was resurrected in the 1990s by British industrialist John Bloor who has built a lineup of cutting-edge sportbikes to nostalgia-themed throwbacks",
    },
  ]);
  let filterProduct = (e) => {
    let a = e.target.value
    let arr = data.filter(x=>x.type == a)
    setData(arr)
    console.log(data)
    
  };
  return (
    <div className="App">
       <select className="inp"  onChange={(e) => filterProduct(e)} >
          <option value="cruiser">cruiser</option>
          <option value="touring">touring</option>
        </select>
        <Card info={data} />
      <div className="cardswraper">
      </div>
    </div>
  );
}

function Card(props) {
  const { info } = props;
  // console.log(props);
  return (
    <>
      {info.map((val) => {
        return (
          <div className="card">
            <img src={val.image} alt={val.name} />
            <div className="bod">
              <p className="card-title">{val.name}</p>
              <p className="price">{val.price}</p>
              <p className="discrip">{val.disc}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}


export default App;
