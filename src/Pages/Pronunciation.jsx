import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MicrophoneIcon } from '../Components/MicrophoneIcon';
import { KoreanIcon } from '../Components/KoreanIcon';
import { BrazilIcon } from '../Components/BrazilIcon';
import { EnglishIcon } from '../Components/EnglishIcon';
import { NullIcon } from '../Components/NullIcon';

import ADONAIogg from '../../src/assets/01-ADONAI.ogg';
import ELOHIMogg from '../../src/assets/02-ELOHIM.ogg';
import YAHWEHogg from '../../src/assets/03-YAHWEH.ogg';
import YESHUAogg from '../../src/assets/04-YESHUA.ogg';
import HA_EMETogg from '../../src/assets/05-HA-EMET.ogg';
import HAMASHIAHogg from '../../src/assets/06-HAMASHIAH.ogg';
import MESHIAHogg from '../../src/assets/07-MESHIAH.ogg';
import SAR_SHALOMogg from '../../src/assets/08-SAR-SHALOM.ogg';
import HALLUYÁHogg from '../../src/assets/09-HALLUYÁH.ogg';
import SHALOMogg from '../../src/assets/10-SHALOM.ogg';
import SHALOM_ALEICHEMogg from '../../src/assets/11-SHALOM-ALEICHEM.ogg';
import AHAVAogg from '../../src/assets/12-AHAVA.ogg';
import EHYEH_AHSHER_EHYEHogg from '../../src/assets/13-EHYEH-AHSHER-EHYEH.ogg';
import ADON_OLAMogg from '../../src/assets/14-ADON-OLAM.ogg';
import EL_SHADDAIogg from '../../src/assets/15-EL-SHADDAI.ogg';
import EL_SALIogg from '../../src/assets/16-EL-SALI.ogg';
import KADOSHogg from '../../src/assets/17-KADOSH.ogg';
import RUACH_HA_KOIDESHogg from '../../src/assets/18-RUACH-HA-KOIDESH.ogg';
import YAHWEH_ROIogg from '../../src/assets/19-YAHWEH-ROI.ogg';
import ADONAI_ECHADogg from '../../src/assets/20-ADONAI-ECHAD.ogg';
import ADONAI_MELEKogg from '../../src/assets/21-ADONAI-MELEK.ogg';
import ADONAI_TSEBAYOTHogg from '../../src/assets/22-ADONAI-TSEBAYOTH.ogg';
import AIN_SOPHogg from '../../src/assets/23-AIN-SOPH.ogg';
import AVINU_MALKEINUogg from '../../src/assets/24-AVINU-MALKEINU.ogg';
import EL_ELYONogg from '../../src/assets/25-EL-ELYON.ogg';
import EL_ROIogg from '../../src/assets/26-EL-ROI.ogg';
import ELI_ELIogg from '../../src/assets/27-ELI-ELI.ogg';
import ELOHEY_HASHAMAYIMogg from '../../src/assets/28-ELOHEY-HASHAMAYIM.ogg';
import SHABBATogg from '../../src/assets/29-SHABBAT.ogg';
import KENogg from '../../src/assets/30-KEN.ogg';
import LOogg from '../../src/assets/31-LO.ogg';
import SLYHAogg from '../../src/assets/32-SLYHA.ogg';
import TODAogg from '../../src/assets/33-TODA.ogg';
import TODA_RABAogg from '../../src/assets/34-TODA-RABA.ogg';
import EKKLESIAogg from '../../src/assets/35-EKKLESIA.ogg';
import T_FILAogg from '../../src/assets/36-T-FILA.ogg';
import INTIMIUT_IM_ELOHIMogg from '../../src/assets/37-INTIMIUT-IM-ELOHIM.ogg';
import HAKARAT_HATOVogg from '../../src/assets/38-HAKARAT-HATOV.ogg';
import PULKHANogg from '../../src/assets/39-PULKHAN.ogg';
import SHEVAKHogg from '../../src/assets/40-SHEVAKH.ogg';
import SHITUFogg from '../../src/assets/41-SHITUF.ogg';
import TSEDEKogg from '../../src/assets/42-TSEDEK.ogg';
import KIDDUSHogg from '../../src/assets/43-KIDDUSH.ogg';
import OSHERogg from '../../src/assets/44-OSHER.ogg';
import AMANNogg from '../../src/assets/45-AMANN.ogg';
import YIGDAL_ELOHIM_CHAIogg from '../../src/assets/46-YIGDAL-ELOHIM-CHAI.ogg';
import TIFEERETTogg from '../../src/assets/47-TIFEERETT.ogg';
import KAVODogg from '../../src/assets/48-KAVOD.ogg';
import BRITogg from '../../src/assets/49-BRIT.ogg';
import KHAKHEMAHogg from '../../src/assets/50-KHAKHEMAH.ogg';
import BERESHITH_BARA_ELOHIMogg from '../../src/assets/51-BERESHITH-BARA-ELOHIM.ogg';
import AMMI_SHADDAIogg from '../../src/assets/52-AMMI-SHADDAI.ogg';
import ARIK_ANPINogg from '../../src/assets/53-ARIK-ANPIN.ogg';
import ATTIQ_YOMINogg from '../../src/assets/54-ATTIQ-YOMIN.ogg';
import EL_ELOHE_ISRAELogg from '../../src/assets/55-EL-ELOHE-ISRAEL.ogg';
import GEDULAHogg from '../../src/assets/56-GEDULAH.ogg';
import HA_EL_HA_GADOLogg from '../../src/assets/57-HA-EL-HA-GADOL.ogg';
import HA_GOELogg from '../../src/assets/58-HA-GOEL.ogg';
import HA_SHEMogg from '../../src/assets/59-HA-SHEM.ogg';
import OSE_SHALOMogg from '../../src/assets/60-OSE-SHALOM.ogg';
import SHEMA_ISRAELogg from '../../src/assets/61-SHEMA-ISRAEL.ogg';
import YAHWEH_ELOHIMogg from '../../src/assets/62-YAHWEH-ELOHIM.ogg';
import YAHWEH_SHALOMogg from '../../src/assets/63-YAHWEH-SHALOM.ogg';
import SHEKINAHogg from '../../src/assets/64-SHEKINAH.ogg';
import VAY_YIK_RAogg from '../../src/assets/65-VAY-YIK-RA.ogg';
import HA_TIKVAogg from '../../src/assets/66-HA-TIKVA.ogg';
import AMUD_HA_ESHogg from '../../src/assets/67-AMUD-HA-ESH.ogg';
import IVRITogg from '../../src/assets/68-IVRIT.ogg';
import KHAYÍMogg from '../../src/assets/69-KHAYÍM.ogg';
import SLYHA_BEVAKASHAogg from '../../src/assets/70-SLYHA_BEVAKASHA.ogg';
import KOL_HKAVODogg from '../../src/assets/71-KOL-HKAVOD.ogg';
import YOM_HULEDET_SAMEAHogg from '../../src/assets/72-YOM-HULEDET-SAMEAH.ogg';
import CHAG_SAMECAHogg from '../../src/assets/73-CHAG-SAMECAH.ogg';
import KHANINAHogg from '../../src/assets/74-KHANINAH.ogg';
import BRASIIHogg from '../../src/assets/75-BRASIIH.ogg';

export function Pronunciation() {
  const navigate = useNavigate();

  const words = [
    {hebrew: 'אדוני', romanization: "ADONAI", portugueseBR: "SENHOR", englishUS: "LORD", audio: ADONAIogg},
    {hebrew: 'אדוני', romanization: "ADONAI", portugueseBR: "SENHOR", englishUS: "LORD", audio: ADONAIogg},
    {hebrew: 'אלוהים', romanization: "ELOHIM (OU EL = ה)", portugueseBR: "DEUS", englishUS: "GOD", audio: ELOHIMogg},
    {hebrew: 'יהווה', romanization: "יהוה = YEHOVAH // YAHWEH // YHWH", portugueseBR: "JEOVÁ", englishUS: "JEHOVAH", audio: YAHWEHogg},
    {hebrew: 'ישוע', romanization: "YESHUA", portugueseBR: "JESUS", englishUS: "JESUS", audio: YESHUAogg},
    {hebrew: 'האמת', romanization: "HA EMET", portugueseBR: "A VERDADE", englishUS: "THE TRUTH", audio: HA_EMETogg},
    {hebrew: 'המשיח', romanization: "HAMASHIAH", portugueseBR: "CRISTO", englishUS: "CHRIST", audio: HAMASHIAHogg},
    {hebrew: 'משיח', romanization: "MESHIAH", portugueseBR: "MESSIAS", englishUS: "MESSIAH", audio: MESHIAHogg},
    {hebrew: 'שר שלום', romanization: "SAR SHALOM", portugueseBR: "O PRÍNCIPE DA PAZ", englishUS: "THE PRINCE OF PEACE", audio: SAR_SHALOMogg},
    {hebrew: 'הללויה', romanization: "HAL'LUYÁH", portugueseBR: "ALELUIA (DEUS SEJA LOUVADO)", englishUS: "HALLELUJAH", audio: HALLUYÁHogg},
    {hebrew: 'שלום', romanization: "SHALOM", portugueseBR: "OLÁ // PAZ", englishUS: "HELLO", audio: SHALOMogg},
    {hebrew: 'שלום עליכם', romanization: "SHALOM ALEICHEM", portugueseBR: "A PAZ ESTEJA CONVOSCO (SAUDAÇÃO MUITO USADA POR JESUS)", englishUS: "PEACE BE UPON YOU (GREETING OFTEN USED BY JESUS)", audio: SHALOM_ALEICHEMogg},
    {hebrew: 'אהבה', romanization: "AHAVÁ", portugueseBR: "AMOR", englishUS: "LOVE", audio: AHAVAogg},
    {hebrew: 'אהיה אשר אהיה', romanization: "EHYEH AHSHER EHYEH", portugueseBR: "EU SOU O QUE SOU", englishUS: "I AM WHO I AM", audio: EHYEH_AHSHER_EHYEHogg},
    {hebrew: 'אדון עולם', romanization: "ADON OLAM", portugueseBR: "SENHOR DO UNIVERSO", englishUS: "LORD OF THE UNIVERSE", audio: ADON_OLAMogg},
    {hebrew: 'אל שדי', romanization: "EL SHADDAI", portugueseBR: "DEUS TODO PODEROSO", englishUS: "ALMIGHTY GOD", audio: EL_SHADDAIogg},
    {hebrew: 'הסלעי', romanization: "EL SALI", portugueseBR: "DEUS DA MINHA ROCHA", englishUS: "THE GOD OF MY STRENGTH", audio: EL_SALIogg},
    {hebrew: 'קדוש', romanization: "KADOSH", portugueseBR: "SANTO / SAGRADO", englishUS: "HOLY", audio: KADOSHogg},
    {hebrew: 'רוח הקודש', romanization: "RUACH HA KOIDESH", portugueseBR: "O ESPÍRITO SANTO", englishUS: "THE HOLY SPIRIT", audio: RUACH_HA_KOIDESHogg},
    {hebrew: 'יהווה רועי', romanization: "YEHOVAH ROI", portugueseBR: "O SENHOR É MEU PASTOR", englishUS: "THE LORD IS MY SHEPHERD", audio: YAHWEH_ROIogg},
    {hebrew: 'אדוני אחד', romanization: "ADONAI ECHAD", portugueseBR: "O SENHOR É UM", englishUS: "THE LORD IS ONE", audio: ADONAI_ECHADogg},
    {hebrew: 'אדוני מלך', romanization: "ADONAI MELEK", portugueseBR: "SENHOR REI", englishUS: "LORD KING", audio: ADONAI_MELEKogg},
    {hebrew: 'אדוני של צבאות', romanization: "ADONAI TSEBAYOTH", portugueseBR: "SENHOR DOS EXÉRCITOS", englishUS: "LORD OF THE ARMY", audio: ADONAI_TSEBAYOTHogg},
    {hebrew: 'אין סוף', romanization: "AIN SOPH", portugueseBR: "O ILIMITADO", englishUS: "THE UNLIMITED", audio: AIN_SOPHogg},
    {hebrew: 'אבינו מלכנו', romanization: "AVINU MALKEINU", portugueseBR: "Ó PAI, NOSSO REI", englishUS: "OUR FATHER, OUR KING", audio: AVINU_MALKEINUogg},
    {hebrew: 'עליון', romanization: "EL ELYON", portugueseBR: "O DEUS ALTÍSSIMO", englishUS: "GOD MOST HIGH", audio: EL_ELYONogg},
    {hebrew: 'אֵל רועי', romanization: "EL ROI", portugueseBR: "O DEUS QUE ME VÊ, QUE TUDO VÊ", englishUS: "THE GOD WHO SEES ME", audio: EL_ROIogg},
    {hebrew: 'אלי אלי', romanization: "ELI, ELI,", portugueseBR: "MEU DEUS, MEU DEUS", englishUS: "MY GOD, MY GOD", audio: ELI_ELIogg},
    {hebrew: 'אלוהי השמים', romanization: "ELOHEY HASHAMAYIM", portugueseBR: "O DEUS DOS CÉUS", englishUS: "GOD OF HEAVEN", audio: ELOHEY_HASHAMAYIMogg},
    {hebrew: 'שבת', romanization: "SHABBAT", portugueseBR: "SÁBADO / DESCANSO", englishUS: "SABBATH / REST", audio: SHABBATogg},
    {hebrew: 'כן', romanization: "KEN", portugueseBR: "SIM", englishUS: "YES", audio: KENogg},
    {hebrew: 'לא', romanization: "LO", portugueseBR: "NÃO", englishUS: "NO", audio: LOogg},
    {hebrew: 'סליחה', romanization: "SLYHA", portugueseBR: "DESCULPE", englishUS: "SORRY", audio: SLYHAogg},
    {hebrew: 'תודה', romanization: "TODA", portugueseBR: "OBRIGADO", englishUS: "THANK YOU", audio: TODAogg},
    {hebrew: 'תודה רבה', romanization: "TODA RABA", portugueseBR: "MUITO OBRIGADO", englishUS: "THANKS A LOT", audio: TODA_RABAogg},
    {hebrew: 'כנסיה', romanization: "EKKLESIA", portugueseBR: "IGREJA", englishUS: "CHURCH", audio: EKKLESIAogg},
    {hebrew: 'תפלה', romanization: "T'FILÁ", portugueseBR: "ORAÇÃO", englishUS: "PRAYER", audio: T_FILAogg},
    {hebrew: 'אינטימיות עם אלוהים', romanization: "INTIMIUT IM ELOHIM", portugueseBR: "INTIMIDADE COM DEUS", englishUS: "INTIMACY WITH GOD", audio: INTIMIUT_IM_ELOHIMogg},
    {hebrew: 'הכרת הטוב', romanization: "HAKARAT HATOV", portugueseBR: "GRATIDÃO", englishUS: "GRATEFULNESS", audio: HAKARAT_HATOVogg},
    {hebrew: 'פולחן', romanization: "PULKHAN", portugueseBR: "ADORAÇÃO", englishUS: "WORSHIP", audio: PULKHANogg},
    {hebrew: 'שבח', romanization: "SHEVAKH", portugueseBR: "LOUVOR", englishUS: "PRAISE", audio: SHEVAKHogg},
    {hebrew: 'שִׁתוּף', romanization: "SHITÚF", portugueseBR: "COMUNHÃO", englishUS: "COMMUNION", audio: SHITUFogg},
    {hebrew: 'צדק', romanization: "TSEDÉK", portugueseBR: "JUSTIÇA", englishUS: "JUSTICE", audio: TSEDEKogg},
    {hebrew: 'קידוש', romanization: "KIDDUSH ", portugueseBR: "SANTIFICAÇÃO", englishUS: "SANCTIFICATION", audio: KIDDUSHogg},
    {hebrew: 'אושר', romanization: "OSHER", portugueseBR: "FELICIDADE", englishUS: "HAPPINESS", audio: OSHERogg},
    {hebrew: 'אָמָּן', romanization: "AMANN", portugueseBR: "AMÉM (ASSIM SEJA)", englishUS: "AMEN (SO BE IT)", audio: AMANNogg},
    {hebrew: 'יגדל אלוהים חי', romanization: "YIGDAL ELOHIM CHAI", portugueseBR: "SEJA EXALTADO O DEUS VIVO", englishUS: "BE EXALTED THE LIVING GOD", audio: YIGDAL_ELOHIM_CHAIogg},
    {hebrew: 'תפארת', romanization: "TIFEERETT", portugueseBR: "GLÓRIA", englishUS: "GLORY", audio: TIFEERETTogg},
    {hebrew: 'כבוד', romanization: "KAVÓD", portugueseBR: "HONRA", englishUS: "HONOR", audio: KAVODogg},
    {hebrew: 'ברית', romanization: "BRIT", portugueseBR: "ALIANÇA", englishUS: "ALLIANCE", audio: BRITogg},
    {hebrew: 'חוכמה', romanization: "KHAKHEMAH", portugueseBR: "SABEDORIA", englishUS: "WISDOM", audio: KHAKHEMAHogg},
    {hebrew: 'בראשית ברא אלהים', romanization: "BERESHITH BARA ELOHIM", portugueseBR: "NO INÍCIO, DEUS CRIOU…", englishUS: "IN THE BEGINNING, GOD CREATED…", audio: BERESHITH_BARA_ELOHIMogg},
    {hebrew: 'עַמִּישַׁדָּי', romanization: "AMMI SHADDAI", portugueseBR: "POVO DO DEUS TODO PODEROSO", englishUS: "PEOPLE OF ALMIGHTY GOD", audio: AMMI_SHADDAIogg},
    {hebrew: 'אריך אנפין', romanization: "ARIK ANPIN", portugueseBR: "O DA GRANDE FACE, A FACE DE DEUS", englishUS: "THE FACE OF GOD", audio: ARIK_ANPINogg},
    {hebrew: 'עתיק יומין', romanization: "ATTIQ YOMIN", portugueseBR: "ANTIGO DE DIAS, QUE ESTÁS NO TRONO DIVINO", englishUS: "ANCIENT OF DAYS, IS ON THE DIVINE THRONE", audio: ATTIQ_YOMINogg},
    {hebrew: 'אל אלהי ישראל', romanization: "EL ELOHE ISRAEL", portugueseBR: "DEUS, O DEUS DE ISRAEL", englishUS: "GOD, THE GOD OF ISRAEL", audio: EL_ELOHE_ISRAELogg},
    {hebrew: 'גדולה', romanization: "GEDULAH", portugueseBR: "MAGNITUDE / GRANDIOSIDADE", englishUS: "GREATNESS", audio: GEDULAHogg},
    {hebrew: 'האל הגדול', romanization: "HA-EL HA GADOL", portugueseBR: "O GRANDE DEUS", englishUS: "THE GREAT GOD", audio: HA_EL_HA_GADOLogg},
    {hebrew: 'הגואל', romanization: "HA GO’EL", portugueseBR: "O REDENTOR", englishUS: "THE REDEEMER", audio: HA_GOELogg},
    {hebrew: 'השם', romanization: "HA SHEM", portugueseBR: "O [GRANDE] NOME", englishUS: "THE BIG NAME", audio: HA_SHEMogg},
    {hebrew: 'עושה שלום', romanization: "OSE SHALOM", portugueseBR: "PACIFICADOR", englishUS: "PEACE MAKER", audio: OSE_SHALOMogg},
    {hebrew: 'שמע ישראל', romanization: "SHEMA ISRAEL", portugueseBR: "OUVE, Ó ISRAEL", englishUS: "HEAR, ISRAEL", audio: SHEMA_ISRAELogg},
    {hebrew: 'יהווה אלוהים', romanization: "YAHWEH ELOHIM", portugueseBR: "DEUS CRIADOR / SENHOR DEUS", englishUS: "CREATOR GOD", audio: YAHWEH_ELOHIMogg},
    {hebrew: 'יהווה שלום', romanization: "YAHWEH SHALOM", portugueseBR: "A PAZ DE YAHWEH", englishUS: "THE PEACE OF YAHWEH", audio: YAHWEH_SHALOMogg},
    {hebrew: 'שכינה', romanization: "SHEKINAH", portugueseBR: "A PRESENÇA DIVINA", englishUS: "THE DIVINE PRESENCE", audio: SHEKINAHogg},
    {hebrew: 'ויקרא', romanization: "VAY-YIK-RA", portugueseBR: "O CHAMADO", englishUS: "AND HE CALLED", audio: VAY_YIK_RAogg},
    {hebrew: 'התקווה', romanization: "HA TIKVA", portugueseBR: "A ESPERANÇA", englishUS: "THE HOPE", audio: HA_TIKVAogg},
    {hebrew: 'עמוד האש', romanization: "AMUD HA-ESH", portugueseBR: "PILAR DE FOGO", englishUS: "PILLAR OF FIRE", audio: AMUD_HA_ESHogg},
    {hebrew: 'עברית', romanization: "IVRIT", portugueseBR: "HEBRAICO", englishUS: "HEBREW", audio: IVRITogg},
    {hebrew: 'חיים', romanization: "KHAYÍM", portugueseBR: "VIDA", englishUS: "LIFE", audio: KHAYÍMogg},
    {hebrew: 'סליחה, בבקשה', romanization: "SLYHA, BEVAKASHA", portugueseBR: "POR FAVOR!", englishUS: "PLEASE!", audio: SLYHA_BEVAKASHAogg},
    {hebrew: 'כל הכבוד', romanization: "KOL HKAVOD", portugueseBR: "PARABÉNS!", englishUS: "CONGRATULATIONS!", audio: KOL_HKAVODogg},
    {hebrew: 'יום-הולדת שמח', romanization: "YOM-HULEDET SAME'AH", portugueseBR: "FELIZ ANIVERSÁRIO!", englishUS: "HAPPY BIRTHDAY!", audio: YOM_HULEDET_SAMEAHogg},
    {hebrew: 'חג שמח', romanization: "CHAG SAMECAH", portugueseBR: "BOAS FESTAS", englishUS: "HAPPY HOLIDAYS", audio: CHAG_SAMECAHogg},
    {hebrew: 'חנינה', romanization: "KHANINAH", portugueseBR: "PERDÃO", englishUS: "FORGIVENESS", audio: KHANINAHogg},
    {hebrew: 'ברזיל', romanization: "BRASIIH", portugueseBR: "BRASIL", englishUS: "BRAZIL", audio: BRASIIHogg},
  ];

  const [word, setWord] = useState(words[0]);
  const [index, setIndex] = useState(1);
  const [spoken, setSpoken] = useState('');
  const [translate, setTranslate] = useState(false);
  const [translateModalPortuguese, setTranslateModalPortuguese] = useState(true);
  const [translateModalEnglish, setTranslateModalEnglish] = useState(false);
  const [message, setMessage] = useState('');
  const [disabledListening, setDisabledListening] = useState(false);
  const [disabledSpeak, setDisabledSpeak] = useState(false);
  const [microphoneOn, setMicrophoneOn] = useState(false);
  const [notChangeWord, setNotChangeWord] = useState(false);

  function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }
  
  function ascending() {
    setMessage('');
    setSpoken('');
    let wordAscending = '';  
    if (index === 2 ) {
      setIndex(1);
      wordAscending = words[index + 1];
    }  
    if (index < words.length - 1) {
      setIndex(index + 1);
      wordAscending = words[index + 1];
    } else {
      setIndex(words.length - 1);
      wordAscending = words[index];
    }
    setWord(wordAscending);
  }

  function descending() {
    setMessage('');
    setSpoken('');
    let wordDescending = '';    
    if (index > 1 && index <= words.length - 1) {
      setIndex(index - 1);
      wordDescending = words[index - 1];
    } else {
      setIndex(1);
      wordDescending = words[index];
    }
    setWord(wordDescending);    
  }

  async function audioPlay() {
    new Audio(word.audio).play();
    await sleep(0);
    setDisabledListening(true);
    setDisabledSpeak(true);
    await sleep(1000);
    setDisabledListening(false);
    setDisabledSpeak(false);
  }

  async function speakWord() {    
    setMessage('');
    setSpoken('');
    setNotChangeWord(true);
    setDisabledListening(true);
    setDisabledSpeak(true);
    setMicrophoneOn(true);
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "he-IL";
    recognition.start();
    
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      setSpoken(transcript);
      check(transcript);      
    };

    recognition.onend = () => {
      
      setNotChangeWord(false);       
      setDisabledListening(false);
      setDisabledSpeak(false);
      setMicrophoneOn(false);
    }
  }  

  let nextWord = word.hebrew;  
  function check(transcript) {            
    if (nextWord === transcript) {
      setMessage("Você acertou!!!");            
    } else {
      setDisabledListening(false);
      setMicrophoneOn(false);
      setNotChangeWord(false);      
      setMessage(
        "Tente novamente pelo botão PRONUNCIAR ou troque a palavra"
      );
    };
  }

  function toEnglish() {
    setTranslateModalEnglish(true);
    setTranslateModalPortuguese(false);
  }

  function toPortuguese() {
    setTranslateModalEnglish(false);
    setTranslateModalPortuguese(true);
  }

  return (
    <>
      <div>
        <div className='mb-10 grid place-items-center'>
          <h1 className="text-center relative m-2 mb-1 font-bold text-[28px]" title="Pronunciation English">Hebraico da Bíblia</h1>
          <h3 className="text-center relative mb-6 font-bold text-[20px]" title="Pronunciation English">Biblical Hebrew</h3>
          <label htmlFor="my-modal-6" className="btn btn-info modal-button animate-pulse leading-5">Como funciona!<br></br>How it works!</label>
        </div>

        <input type="checkbox" id="my-modal-6" className="modal-toggle" />

        <div className="modal modal-bottom modal-middle">
          { translateModalPortuguese && 
          <div className="modal-box text-[15px]">          
            <h3 className="font-bold text-[18px] text-[#61dbfb] tracking-[.20em]">Como funciona!</h3>
            <div className='flex justify-center'>
              <button className='btn-outline rounded-lg flex justify-center items-center mx-2' onClick={toEnglish}><p className='p-1'>In English</p>< EnglishIcon /></button>
              <button className='btn-outline rounded-lg flex justify-center items-center mx-2' onClick={toPortuguese}><p className='p-1'>Em Português</p>< BrazilIcon /></button>
            </div>
            <div>
              <div className="py-1 leading-relaxed">Que tal conhecer um pouco do idioma hebraico? Aqui você pode conhecer de uma forma diferente, no contexto bíblico, com palavras e pequenas frases muito utilizadas pelo povo de Israel em toda a sua história;</div>
              <div className="py-1 leading-relaxed">Você vai poder conhecer a palavra no alfabeto hebraico e na versão romanizada, e com as traduções em português-BR e inglês-US. Conseguirá ouvir a pronúncia, e se você acessar pelo navegador do Google Chrome no computador ou em dispositivos Android, conseguirá também pronunciar. Algumas palavras e frases são mais difíceis de pronunciar, mas não deixe de tentar;</div>
              <div className="py-1 leading-relaxed">Ao acessar, permita/autorize a ativação do seu microfone;</div>
              <div className="py-1 leading-relaxed">É exibida uma palavra em hebraico, que você pode trocar pelos botões <p className='btn btn-outline btn-xs'>PRÓXIMA PALAVRA</p> ou <p className='btn btn-outline btn-xs'>PALAVRA ANTERIOR</p> . Você pode ouvir a pronúncia pelo botão <p className='btn btn-outline btn-xs'>OUVIR</p> , tentar pronunciar pelo botão <p className='btn btn-outline btn-xs'>PRONUNCIAR</p> , e ver a tradução pelo botão <p className='btn btn-outline btn-xs'>TRADUÇÃO</p> ;</div>           
              <div className="py-1 leading-relaxed">Que Deus te abençoe imensamente 🙏🏻 😃 </div>
              <div className="modal-action">
                <label htmlFor="my-modal-6" className="btn">Ok!</label>
              </div>
            </div>
          </div>
          }
          { translateModalEnglish && 
          <div className="modal-box text-[15px]">          
          <h3 className="font-bold text-[18px] text-[#61dbfb] tracking-[.20em]">How it works!</h3>
          <div className='flex justify-center'>
            <button className='btn-outline rounded-lg flex justify-center items-center mx-2' onClick={toEnglish}><p className='p-1'>In English</p>< EnglishIcon /></button>
            <button className='btn-outline rounded-lg flex justify-center items-center mx-2' onClick={toPortuguese}><p className='p-1'>Em Português</p>< BrazilIcon /></button>
          </div>
          <div>
            <div className="py-1 leading-relaxed">How about knowing a little bit of the Hebrew language? Here you can get to know it in a different way, in the biblical context, with words and small phrases often used by the people of Israel throughout its history;</div>
            <div className="py-1 leading-relaxed">You will be able to know the word in the Hebrew alphabet and in the romanized version, and with the translations in Portuguese-BR and English-US. You will be able to hear the pronunciation, and if you access it through the Google Chrome browser on your computer or Android devices, you will also be able to pronounce it. Some words and phrases are more difficult to pronounce, but be sure to try;</div>
            <div className="py-1 leading-relaxed">When accessing, allow/authorize the activation of your microphone;</div>
            <div className="py-1 leading-relaxed">A Hebrew word is displayed, which you can change using the buttons <p className='btn btn-outline btn-xs'>NEXT WORD</p> or <p className='btn btn-outline btn-xs'>PREVIOUS WORD </p> . You can listen to the pronunciation by the button <p className='btn btn-outline btn-xs'>LISTEN</p> , try to pronounce by the button <p className='btn btn-outline btn-xs'>PRONOUNCE</p> , and see the translation by the button <p className='btn btn-outline btn-xs'>TRANSLATION</p> ;</div>
            <div className="py-1 leading-relaxed">May God bless you immensely 🙏🏻 😃 </div>
            <div className="modal-action">
              <label htmlFor="my-modal-6" className="btn">Ok!</label>
            </div>
          </div>
        </div>
          }
        </div>

        <div className="grid place-items-center bg-base-300 card shadow-xl m-2 p-2 h-[600px] xs2:h-[500px] bg-base-400">
          <div className="absolute inset-x-0 top-0 m-0 xs2:m-1">          
            <button className="btn btn-sm btn-outline text-[10px] leading-3 mr-2 sm:btn-md sm:text-[14px] sm:leading-5"
              disabled={notChangeWord}
              onClick={descending}>
              PALAVRA ANTERIOR<br></br>PREVIOUS WORD
            </button>
            <button className="btn btn-sm btn-outline text-[10px] leading-3 mr-2 sm:btn-md sm:text-[14px] sm:leading-5"
              disabled={notChangeWord}
              onClick={ascending}>
              PRÓXIMA PALAVRA<br></br>NEXT WORD
            </button>            
            <button
              className="btn btn-sm btn-outline text-[10px] leading-3 mr-2 sm:btn-md sm:text-[14px] sm:leading-5"
              onClick={audioPlay}
              disabled={disabledListening}
            >
              OUVIR<br></br>LISTEN
            </button>
            <button className="btn btn-sm btn-outline text-[10px] leading-3 mr-2 sm:btn-md sm:text-[14px] sm:leading-5"
            onClick={speakWord}
            disabled={disabledSpeak}
            > 
              PRONUNCIAR<br></br>PRONOUNCE
            </button> 
            <button
                className="btn btn-sm btn-outline text-[10px] leading-3 mr-2 sm:btn-md sm:text-[14px] sm:leading-5"
                onClick={() => setTranslate(!translate)}
            >
                TRADUÇÃO<br></br>TRANSLATION
            </button>           
            <button className="relative top-0 ssm:top-5 md:top-0 lg:top-6 rounded-md pointer-events-none"
              style={{ animation: microphoneOn ? 'pulse 1.5s ease-out infinite' : '' , color: microphoneOn ? '#fa4b4bfb' : 'gray'}}
              aria-label="Microphone"
            >
              < MicrophoneIcon />
            </button>
            
            <div className='mt-0 xs2:mt-2'>
              <h2 className='flex items-center justify-center font-bold text-[11px] xs2:text-[14px] xs:text-[18px] sm:text-[22px] xs2:py-1'>
                <span className='pl-[5%] pr-[5%]'>< KoreanIcon /></span>
                <span className='w-[100%] pr-[13%] pb-[5px]'>{word.hebrew}</span>
              </h2>
              <h2 className='flex items-center justify-center font-bold text-[9px] xs2:text-[10px] xs:text-[12px] sm:text-[16px] xs2:py-1'>
                <span className='pl-[5%] pr-[5%]'>< NullIcon /></span>
                <span className='w-[100%] pr-[13%]'>{word.romanization}</span>
              </h2>
              {translate && (
                <div>
                  <p className='flex items-center justify-center font-bold my-2 text-[9px] xs2:text-[10px] xs:text-[12px] sm:text-[16px] xs2:py-1'>
                    <span className='pl-[5%] pr-[5%]'>< BrazilIcon /></span>
                    <span className='w-[100%] pr-[13%]'>{word.portugueseBR}</span>
                  </p>
                  <p className='flex items-center justify-center font-bold my-2 text-[9px] xs2:text-[10px] xs:text-[12px] sm:text-[16px] xs2:py-1'>
                    <span className='pl-[5%] pr-[5%]'>< EnglishIcon /></span>
                    <span className='w-[100%] pr-[13%]'>{word.englishUS}</span>
                  </p>
                </div>
              )
              }
            </div>
          </div>

          <div className='flex justify-center h400:pt-[50px]'>
            <p className="flex absolute bottom-[12%] text-[12px] font-bold p-2 xs2:text-[14px] xxs:pt-[150px] xs:pt-[200px] sm:text-[24px]">
              {spoken}
            </p>
            <p className="flex absolute bottom-[3%] text-[10px] font-bold p-2 xs2:text-[12px] xs:pt-[0px] md:text-[18px]">
              {message}
            </p>
          </div>

        </div>

        {/* <button className='btn btn-outline' onClick={() => window.location.reload(true)}>ATUALIZE A PÁGINA AQUI</button> */}
        
        <div className="grid place-items-center py-0 xs2:pb-2 xs:pb-2 xs:text-[16px] sm:text-[18px]">
          <p className="font-bold text-[11px] mt-1 sm:text-[14px]">Conheça mais o idioma hebraico</p>
          <p className="font-bold text-[11px] mt-1 sm:text-[14px]">Learn more about the Hebrew language</p>
          <a href="https://www.loecsen.com/pt/curso-hebraico" target="_blank" title="Aprendendo-coreano">
            <button
              className="btn btn-info btn-sm text-[11px] leading-3 xs2:mt-2 xs:mt-2 sm:text-[14px] sm:leading-5 sm:btn-md sm:mt-4"              
            >
              CLIQUE AQUI!
              <br></br>
              CLICK HERE!
            </button>
          </a>
        </div>  
      </div>
    </>
  );
}