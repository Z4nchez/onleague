import React from 'react'
import styles from "./IconsPanel.module.css"
import {useSpring, animated, config} from "react-spring"

export default function IconsPanel({iconPanel, iconS}) {

    const animPanel = useSpring({
        from: {opacity: 0, height: "300px"},
        to: {opacity : 1, height: "410px"},
        config: config.default
    })   

  return (
    <animated.div className={styles.contPanel} style={animPanel}>
        <div className={styles.contTitle}>
            <p>Choose a Picture</p>
            <button onClick={() => iconPanel("A")}>Close</button>
        </div>
        <div className={styles.contIcons}>
            <div className={styles.iconsColours}>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416367/OnLeague/default0_agszjn.png" alt="Default" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Default"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416367/OnLeague/default1_tqfqqv.png" alt="Blue" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Blue"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416367/OnLeague/default2_vutvay.png" alt="Green" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Green"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416367/OnLeague/default3_xow5y4.png" alt="Pink" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Pink"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416367/OnLeague/default4_x01ku6.png" alt="Yellow" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Yellow"/>
            </div>
            <div className={styles.iconsAnimals}>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416350/OnLeague/icon1_hghndz.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Eagle"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416352/OnLeague/icon2_dedjl2.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Lion"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416351/OnLeague/icon3_guxrgo.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Shark"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416351/OnLeague/icon4_xx5mm6.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Alligator"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416351/OnLeague/icon5_yaunpb.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Bull"/>
            </div>
            <div className={styles.iconsFlags}>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416299/OnLeague/Algeria_skvnrs.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Algeria"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416299/OnLeague/Argentina_ekhzbj.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Argentina"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416300/OnLeague/Australia_e7gvun.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Australia"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416300/OnLeague/Austria_cotgsr.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Austria"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416300/OnLeague/Bangladesh_xokbrd.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Bangladesh"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416300/OnLeague/Belgium_a3xipr.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Belgium"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416300/OnLeague/Bolivia_nz9jwc.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Bolivia"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416301/OnLeague/Brazil_k1irzv.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Brazil"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416301/OnLeague/Bulgaria_x7cv4p.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Bulgaria"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416301/OnLeague/Cameroon_fsopll.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Cameroon"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416301/OnLeague/Canada_sxhzvj.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Canada"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416301/OnLeague/Chile_eca028.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Chile"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416302/OnLeague/China_gnswwr.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="China"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416302/OnLeague/Colombia_geau2z.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Colombia"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416302/OnLeague/Costa-Rica_wzznz4.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Costa Rica"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416302/OnLeague/Cote-d_Ivoire_wxtaun.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Cote d Ivoire"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416303/OnLeague/Cuba_yorh7a.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Cuba"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416303/OnLeague/Czech-Republic_u1le39.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Czech Republic"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416304/OnLeague/Dominican-Republic_tmdd0i.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Dominican Republic"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416307/OnLeague/Ecuador_jowkvf.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Ecuador"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416307/OnLeague/Egypt_llhvxa.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Egypt"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416307/OnLeague/El-Salvador_rmk0nx.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="El Salvador"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416292/OnLeague/England_dvnfcz.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="England"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416292/OnLeague/Estonia_fne6wu.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Estonia"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416292/OnLeague/Finland_zqwn5z.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Finland"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416292/OnLeague/France_kbadh1.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="France"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416292/OnLeague/Germany_xbbupv.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Germany"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416292/OnLeague/Ghana_husw2t.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Ghana"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416292/OnLeague/Grecee_bu0tgr.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Grecee"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416292/OnLeague/Guatemala_mqoihb.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Guatemala"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416292/OnLeague/Honduras_lsgsuh.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Honduras"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416292/OnLeague/Hungary_lkjcm1.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Hungary"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416292/OnLeague/Iceland_ey8ev6.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Iceland"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416293/OnLeague/India_cw55tg.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="India"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416293/OnLeague/Indonesia_uakwrw.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Indonesia"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416293/OnLeague/Iran_mqeaxk.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Iran"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416293/OnLeague/Ireland_tthami.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Ireland"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416293/OnLeague/Israel_fffemi.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Israel"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416293/OnLeague/Italy_x0bqyk.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Italy"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416293/OnLeague/Jamaica_jc308x.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Jamaica"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416293/OnLeague/Japan_sjriar.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Japan"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416293/OnLeague/Kazakhstan_byl2lw.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Kazakhstan"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416293/OnLeague/Korea_-South_oxtzea.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="South Korea"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416294/OnLeague/Kuwait_iuyv5e.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Kuwait"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416294/OnLeague/Lithuania_ru1xhh.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Lithuania"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416294/OnLeague/Macedonia_oxnqgd.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Macedonia"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416295/OnLeague/Mexico_srusyd.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Mexico"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416295/OnLeague/Mongolia_npgqiw.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Mongolia"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416295/OnLeague/Morocco_grucph.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Moroco"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416295/OnLeague/Myanmar_dhg3ko.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Myanmar"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416295/OnLeague/Nepal_uczezq.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Nepal"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416295/OnLeague/Netherlands_pa8yji.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Netherlands"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416296/OnLeague/New-Zealand_sr64en.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="New Zealand"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416296/OnLeague/Niger_mfqklu.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Niger"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416296/OnLeague/Nigeria_wji2nx.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Nigeria"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416296/OnLeague/Norway_aggvo9.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Norway"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416296/OnLeague/Panama_k41xb9.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Panama"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416296/OnLeague/Paraguay_xme2go.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Paraguay"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416296/OnLeague/Peru_untjan.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Peru"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416296/OnLeague/Philippines_f31pjh.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Philippines"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416297/OnLeague/Poland_koleke.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Poland"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416297/OnLeague/Portugal_gnsigq.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Portugal"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416297/OnLeague/Qatar_yxl48z.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Qatar"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416297/OnLeague/Romania_lrrxpn.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Romania"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416297/OnLeague/Russia_wmgzsg.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Russia"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416297/OnLeague/Saudi-Arabia_udrjic.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Saudi Arabia"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416297/OnLeague/Senegal_nilf3m.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Senegal"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416297/OnLeague/Serbia_k7g5yh.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Serbia"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416297/OnLeague/Singapore_ehsbph.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Singapore"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416297/OnLeague/Slovakia_hvdig0.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Slovakia"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416297/OnLeague/Slovenia_ykzm4r.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Slovenia"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416298/OnLeague/South-Africa_j7hvby.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="South Africa"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416298/OnLeague/Spain_kcuu0a.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Spain"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416298/OnLeague/Sweden_o71xh9.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Sweden"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416298/OnLeague/Switzerland_qigujw.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Switzerland"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416298/OnLeague/Taiwan_l7l6nh.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Taiwan"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416298/OnLeague/Thailand_z7wz1m.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Thailand"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416298/OnLeague/Tunisia_tf77kb.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Tunisia"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416298/OnLeague/Turkey_sjfxiy.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Turkey"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416298/OnLeague/Ukraine_ee4hdg.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Ukraine"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416298/OnLeague/United-Arab-Emirates_akpuas.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="United Arab Emirates"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416299/OnLeague/United-Kingdom_pmbngj.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="United Kingdom"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416299/OnLeague/United-States-of-America_vnlps6.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="United States"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416299/OnLeague/Uruguay_nrjtu1.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Uruguay"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416299/OnLeague/Venezuela_hg0y6c.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Venezuela"/>
                <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1667416299/OnLeague/Vietnam_gyhjje.png" alt="" onClick={(e) => {iconS(e.target.src); iconPanel("A")}} title="Vietnam"/>
            </div>
        </div>
    </animated.div>
  )
}
