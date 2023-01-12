import dunakanyar from './Pictures_About/Dunakanyar.jpeg'
import madar from './Pictures_About/madar.jpeg'

export default function About() {
  return (<div className="about-div">
    <h1 className="about-h1">A Börzsöny Alapítványt 2003 évben hozták létre az MME Börzsönyi helyi csoportjának tagjai, a Börzsöny hegység és környéke természeti értékeinek védelmére, bemutatására és gyerekek táboroztatására.</h1>
    <div className='about-first-section'>
      <div className='about-card'>
        <h2 className="about-h2">Legfontosabb céljaink:</h2>
        <div className="about-div">
          <ul>
            <li>Környezeti szemléletformálás ismeretterjesztő előadásokon, és tematikus nyári ifjúsági táborokban</li>
            <li>A természetes környezet és tájkép védelme</li>
            <li>Környezetkímélő gazdálkodási módok, természetvédelmi technikák kidolgozása és megvalósítása</li>
            <li>Egyes veszélyeztetett állat és növényfajok gyakorlati védelme</li>
            <li>Sérült, vadonélő védett állatok mentése, gyógykezelése és visszajuttatása a természetbe</li>
            <li>Önkormányzatok természetvédelmi törekvéseinek támogatása</li>
            <li>Védett és érzékeny természeti területek természetvédelmi kezelése</li>
            <li>Kulturális és történelmi emlékhelyek védelme</li>
          </ul>
        </div>
        <div className="about-div">
          <p>
            Felismertük, hogy hosszútávon a környezet megóvásának a záloga, az új generációk környezeti nevelése, ezért elsőrendű feladatunknak tekintjük a fiatalok helyes szemléletének kialakítását. Programjaink végrehajtása során szorosan együttműködünk az MME 22. sz. Börzsönyi helyi csoportjával, és más civil szervezetekkel, valamint a Duna-Ipoly Nemzeti Parkkal, és az Ipoly-Erdő Zrt erdészeteivel. Alkalmazottunk nincs, minden tevékenységet önkéntesek látnak el.
          </p>
        </div>
      </div>
      <div className="image" id="big-img-1-div">
        <img className='about-img'  id="big-img-1" src="https://www.borzsony.org/media/user_photos/1708_5_27_354232.jpg" alt="borzsonytabor"></img>
      </div>
    </div>

    <h1 className="about-h1">Programjaink:</h1>

    
    <div className='about-card'>
      <h3 className="about-h3">Ismeretterjesztő előadások:</h3>
      <div className='image'>
        <img className='about-img' src={dunakanyar} alt="dunakanyar"></img>
      </div>
      <div className="about-div">
        <p>
          Aktivistáink felkérésre diaképes, és projektoros előadásokat tartanak iskolákban, nyugdíjasklubokban, teleházban. A Börzsöny természeti értékeinek bemutatása mellett, a környezettudatos szemlélet fontosságára és a környezet sérülékenységére hívjuk fel a figyelmet, a környezetterhelő technológiák és helytelen vásárlási szokások bemutatásával. Iskolás csoportoknak "odúkopácsoló" gyakorlati órát tartunk, az elkészített odúkat elvihetik a gyerekek.
        </p>
      </div>
    </div>
    <div className='about-first-section'>
    <div className='about-card' id='summer-camp'>
      <h3 className="about-h3">Nyári természetvédelmi táborok:</h3>
      <div className="about-div">
        <p>
          A több mint 30 éve magas színvonalon rendezett Börzsönyi Természetvédelmi Táborok további működését biztosítjuk, stabil anyagi és infrastruktúrális háttér biztosításával. A táborban, két turnusban kb. 100 iskolás vesz részt. A 12 napos turnusok minden napján, 10 fős kiscsoportokban tematikus foglalkozásokon mutatjuk be a természet titkait, és az erdőben viselkedés szabályait.
        </p>
      
    </div>
    </div>
    <div className='image' id="big-img-2-div">
        <img className='about-img' id="big-img-2" src="https://www.borzsony.org/media/user_photos/1708_5_27_409683.jpg" alt="borzsonytabor"></img>
      </div>
      </div>
    <div className='about-card'>
      <h3 className="about-h3">Vadonélő védett állatok mentése:</h3>
      <div className="about-div">
        <p>
          Az emberkézre került, sérült vadonélő állatok – elsősorban nagytestű madarak – mentését és gyógykezelését végezzük az MME Börzsönyi helyi csoportjával együttműködve, az erre a célra kialakított telephelyeinken. A gyógyult állatokat visszajuttatjuk a természetbe, vagy gondoskodunk elhelyezésükről. Kapcsolatban állunk más mentőközpontokkal, állatkerttel, és a Nemzeti Parkokkal.
        </p>
      </div>
      <div className="about-div">
        <p>
          Felhívjuk azonban a figyelmet, hogy a nem védett madarakat (galambok, szarka, szajkó, dolmányos varjú, tőkés réce, stb.) sajnos nem áll módunkban fogadni !
        </p>
      </div>
      <h3 className="about-h3">Védett és fokozottan védett fajok felmérése, védelme:</h3>
      <div className='image'>
        <img className='about-img' src={madar} alt="madar"></img>
      </div>
      <div className="about-div">
        <p>
          Kameracsapdával monitorozzuk a Börzsöny rejtett életet élő vadfajait, elsősorban a hiúz és vadmacska kutatáshoz járulunk hozzá. Rendszeresen ellenőrizzük a börzsönyi erdőkben élő ritka madárfajokat (feketególya, fehérhátú harkály, vándorsólyom, uhu, macskabagoly stb.) Támogatjuk a MME Börzsönyi csoport madárodú telepítési programját.
        </p>
      </div>
    </div>
    <div className='about-card'>
      <h3 className="about-h3">Befejezett programjaink:</h3>
      <div className="about-div">
        <p>
          A börzsönyi denevér populáció életfeltételeit javítottuk a Szokolyai vasbánya denevérbarát lezárásával és speciális denevérodúk telepítésével.
          A fokozottan védett Magyarföldi husáng (Ferula sadleriana) vadak rágása elleni védelmét kerítés létesítésével biztosítottuk.
          Ismeretterjesztő táblát állítottunk fel, melyen bemutatjuk a Börzsöny védendő természeti értékeit.
          Kistó programunk során a Börzsönyi kétéltű állomány szaporodóhelyeinek felmérését, és néhány beiszapolódott víztest revitalizálását végeztük el.
          A Börzsöny területén GPS alkalmazásával felvételeztük a forrásokat, mértük vízminőségi és fizikai tulajdonságaikat, és adatszolgáltatást végeztünk a Nemzeti forráskataszter részére.
        </p>
      </div>
    </div>
  </div>
  )
}