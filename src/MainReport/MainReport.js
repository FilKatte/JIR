import React from "react";
import styles from "./MainReport.module.css";
import fieldWood from "./assets/fieldWood.jpeg";
import platform from "./assets/platform.jpg";
import jir from "./assets/jir.png";
import scheme from "./assets/scheme.jpg";

class MainReport extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.page}>
          <div className={styles.image}>
            <img src={fieldWood} alt="logo" className={styles.logo} />
          </div>
          <p className={styles.pGreen}>API RP 2A Level I Survey 2019</p>
          <p className={styles.pRed}>SS0253‐E</p>
          <p className={styles.pBlue}>lease PROD</p>

          <div className={styles.image}>
            <img src={platform} alt="platform" className={styles.platform} />
          </div>

          <img src={jir} alt="jir" className={styles.jir} />
        </div>
        {/*2. General Platform info (including list of wells and pipelines)*/}
        <div className={styles.image}>
          <img src={platform} alt="platform" className={styles.platform} />
          <p className={styles.image_text}>North</p>
        </div>

        <div className={styles.image}>
          <img src={platform} alt="platform" className={styles.platform} />
          <p>East</p>
        </div>

        <div className={styles.image}>
          <img src={platform} alt="platform" className={styles.platform} />
          <p>South</p>
        </div>

        <div className={styles.image}>
          <img src={platform} alt="platform" className={styles.platform} />
          <p>West</p>
        </div>

        <div className={styles.image}>
          <img src={platform} alt="platform" className={styles.platform} />
          <p>Platform Signs</p>
        </div>

        <div className={styles.image}>
          <img src={platform} alt="platform" className={styles.platform} />
        </div>

        {/*General Platform info (including list of wells and pipelines)*/}
        <table className={styles.gap}>
          <tbody>
            <tr>
              <th colSpan="3" className={styles.hBlue}>
                Fieldwood Energy
              </th>
              <th colSpan="1">BSEE DATABASES</th>
              <th colSpan="3" className={styles.hRed}>
                SS0253‐E
              </th>
            </tr>
            <tr>
              <th colSpan="7" className={styles.hGreen}>
                Platform
              </th>
            </tr>
            <tr>
              {platforms.slice(0, 7).map(obj => (
                <td key={obj.id}>
                  <p className={styles.pTd}>{obj.header}</p>
                  <p>{obj.value}</p>
                </td>
              ))}
            </tr>
            <tr>
              {platforms.slice(7, 14).map(obj => (
                <td key={obj.id}>
                  <p className={styles.pTd}>{obj.header}</p>
                  <p>{obj.value}</p>
                </td>
              ))}
            </tr>
            <tr>
              {platforms.slice(14, 21).map(obj => (
                <td key={obj.id}>
                  <p className={styles.pTd}>{obj.header}</p>
                  <p>{obj.value}</p>
                </td>
              ))}
            </tr>
            <tr>
              {platforms.slice(21, 28).map(obj => (
                <td key={obj.id}>
                  <p className={styles.pTd}>{obj.header}</p>
                  <p>{obj.value}</p>
                </td>
              ))}
            </tr>

            <tr>
              <th colSpan="7" className={styles.hGreen}>
                Pipelines
              </th>
            </tr>
            <tr>
              {Pipelines.slice(0, 7).map((item, id) => (
                <td key={id}>{item}</td>
              ))}
            </tr>
            <tr>
              {Pipelines.slice(7, 14).map((item, id) => (
                <td key={id}>{item}</td>
              ))}
            </tr>
            <tr>
              {Pipelines.slice(14, 21).map((item, id) => (
                <td key={id}>{item}</td>
              ))}
            </tr>

            <tr>
              <th colSpan="7" className={styles.hGreen}>
                Wells
              </th>
            </tr>
            <tr>
              <th>Well Name</th>
              <th>Status</th>
              <th>Updated</th>
            </tr>

            {Wells.slice(0, 8).map(obj => (
              <tr key={obj.id}>
                <td>{obj.name}</td>
                <td>{obj.Status}</td>
                <td>{obj.Updated}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/*3. Coating condition report (by component): Area,Coating condition,Coating comment*/}
        <table className={styles.gap}>
          <tbody className={styles.coating}>
            <tr>
              <th colSpan="7" className={styles.mainTh}>
                Platform Overall Coating Rating is C
              </th>
            </tr>
            <tr className={styles.blueTh}>
              <th>Area</th>
              <th>Coating</th>
              <th colSpan="5">Coating Description</th>
            </tr>

            {platformRating.map(obj => (
              <tr key={obj.id}>
                <td>{obj.area}</td>
                <td>{obj.coating}</td>
                <td colSpan="5">{obj.description}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/*4. Mechanical damage report: Area,Damage,Damage Description*/}
        <table className={styles.coating}>
          <tbody>
            <tr>
              <th colSpan="7" className={styles.mainTh}>
                <span className={styles.sGreen}>Mechanical Damage</span>
              </th>
            </tr>
            <tr className={styles.blueTh}>
              <th>Area</th>
              <th>Damage</th>
              <th colSpan="5">Description of Mechanical Damage</th>
            </tr>

            {damage.map(obj => (
              <tr key={obj.id}>
                <td>{obj.area}</td>
                <td>{obj.damage}</td>
                <td colSpan="5">{obj.description}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/*5. Pipeline Risers report: Pipeline info*/}
        <table className={styles.gap}>
          <tbody>
            <tr>
              <th colSpan="7" className={styles.sGreen}>
                Pipeline Risers
              </th>
            </tr>

            <tr className={styles.blueTh}>
              {PipelinesInfo.slice(0, 7).map((item, id) => (
                <td key={id}>{item}</td>
              ))}
            </tr>
            <tr>
              {PipelinesInfo.slice(7, 14).map((item, id) => (
                <td key={id}>{item}</td>
              ))}
            </tr>
            <tr>
              {PipelinesInfo.slice(14, 21).map((item, id) => (
                <td key={id}>{item}</td>
              ))}
            </tr>

            {PipelinesInfo.slice(21).map(obj => (
              <tr key={obj.id}>
                <td>{obj.number}</td>
                <td>{obj.coating}</td>
                <td colSpan="5" className={styles.coating}>
                  {obj.condition}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/*6. Pipeline riser clamps report (1 table)*/}
        <table>
          <tbody>
            <tr>
              <th colSpan="7" className={styles.sGreen}>
                Pipeline Riser Clamps
              </th>
            </tr>
            <tr className={styles.blueTh}>
              <th>Drawing Reference</th>
              <th>Riser Clamp Type</th>
              <th>Clamp Elevation</th>
              <th>Missing or Loose Bolts</th>
              <th>Platform Clamp Type</th>
              <th>Clamp Elevation</th>
              <th>Missing or Loose Bolts</th>
            </tr>

            {PipelineClamps.map(obj => (
              <tr key={obj.id}>
                <td>{obj.reference}</td>
                <td>{obj.type}</td>
                <td>{obj.evalution}</td>
                <td>{obj.Bolts}</td>
                <td>{obj.platform}</td>
                <td>{obj.clamp}</td>
                <td>{obj.missing}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/*7. Cathodic Potential readings*/}
        <table className={styles.gap}>
          <tbody>
            <tr>
              <th colSpan="7" className={styles.sGreen}>
                Cathodic Potential Readings
              </th>
            </tr>
            <tr className={styles.blueTh}>
              <th>Location</th>
              <th>Year</th>
              <th>Leg</th>
              <th>`EL (‐) 10'`</th>
              <th>`EL (‐) 20'`</th>
              <th>`EL (‐) 30'`</th>
              <th>EL (‐) 40'</th>
            </tr>

            {Readings.map(obj => (
              <tr key={obj.id}>
                <td>{obj.location}</td>
                <td>{obj.year}</td>
                <td>{obj.leg}</td>
                <td>{obj.ten}</td>
                <td>{obj.twenty}</td>
                <td>{obj.thirty}</td>
                <td>{obj.footy}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/*8. Conductors (one table)*/}
        <table className={styles.gap}>
          <tbody>
            <tr>
              <th colSpan="7" className={styles.sGreen}>
                Conductors
              </th>
            </tr>
            <tr className={styles.blueTh}>
              <th>Well Name</th>
              <th>Slot</th>
              <th>Coating</th>
              <th>Coating Condition</th>
            </tr>

            {conductors.map(obj => (
              <tr key={obj.id}>
                <td>{obj.name}</td>
                <td>{obj.slot}</td>
                <td>{obj.coating}</td>
                <td colSpan="4">{obj.condition}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/*9. Wellheads (one table)*/}
        <table className={styles.gap}>
          <tbody>
            <tr className={styles.blueTh}>
              <th>Well Name</th>
              <th>Slot</th>
              <th>Damage</th>
              <th>Damage Description</th>
            </tr>

            {conductorsDamage.map(obj => (
              <tr key={obj.id}>
                <td>{obj.name}</td>
                <td>{obj.slot}</td>
                <td>{obj.coating}</td>
                <td colSpan="4">{obj.condition}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/*11. Autocad photo*/}
        <div className={styles.image}>
          <img src={scheme} alt="scheme" className={styles.scheme} />
        </div>

        {/*11. All photos from Component Surveys*/}
        <div className={styles.gap}>
          <p className={styles.title}>Component Surveys</p>
          <div className={styles.image}>
            <img src={platform} alt="component" className={styles.component} />
            <p className={styles.component_text}>label for component</p>
          </div>
          <div className={styles.image}>
            <img src={platform} alt="component" className={styles.component} />
            <p className={styles.component_text}>
              label for component fhfghfg oiewoptuert ieotuioertio kjghkjfhgjkf
              dfkghjfdhghdf kdfjgklfdhgkjhdf dfkgjklfdhgkldfjhg
              dfhgjdlcfghdfghdfkgdfkj dfkjghdfjkhgj dfgjhkdjfhgk dkjfhgjkdfhgkjd
              dfjghdffhl{" "}
            </p>
          </div>
        </div>

        {/*12. All photos from Conductors Surveys*/}
        <div className={styles.gap}>
          <p className={styles.title}> Conductor Surveys</p>
          <div className={styles.image}>
            <img src={platform} alt="component" className={styles.component} />
            <p className={styles.component_text}>label for component</p>
          </div>
          <div className={styles.image}>
            <img src={platform} alt="component" className={styles.component} />
            <p className={styles.component_text}>label for component</p>
          </div>
        </div>

        {/*13. All photos from Risers Surveys */}
        <div className={styles.gap}>
          <p className={styles.title}> Riser Surveys</p>
          <p className={styles.riser}>
            Riser 1 PSN 1761 KAQ-4600 Fieldwood En Off SS0253- A to SS0253-D
            04-1440 OUT-GAS
          </p>
          <div className={styles.image}>
            <img src={platform} alt="component" className={styles.component} />
            <p className={styles.component_text}>label for component</p>
          </div>
          <p className={styles.riser}>
            Riser 1 PSN 1761 KAQ-4600 Fieldwood En Off SS0253- A to SS0253-D
            04-1440 OUT-GAS
          </p>
          <div className={styles.image}>
            <img src={platform} alt="component" className={styles.component} />
            <p className={styles.component_text}>label for component</p>
          </div>
        </div>

        {/*14. All photos from Riser Clamps Surveys */}
        <div className={styles.gap}>
          <p className={styles.title}> Riser Clamps</p>
          <p className={styles.riser}>
            Riser 1 PSN 1761 KAQ-4600 Fieldwood En Off SS0253- A to SS0253-D
            04-1440 OUT-GAS
          </p>
          <div className={styles.image}>
            <img src={platform} alt="component" className={styles.component} />
            <p className={styles.component_text}>label for component</p>
          </div>

          <p className={styles.riser}>
            Riser 1 PSN 1761 KAQ-4600 Fieldwood En Off SS0253- A to SS0253-D
            04-1440 OUT-GAS
          </p>
          <div className={styles.image}>
            <img src={platform} alt="component" className={styles.component} />
            <p className={styles.component_text}>label for component</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MainReport;

const platforms = [
  { id: 1, header: "Complex", value: "20737‐3" },
  { id: 2, header: "Type", value: "FIXED" },
  { id: 3, header: "Piling", value: "8‐pile" },
  { id: 4, header: "Installed", value: "01 Jan 1981" },
  { id: 5, header: "Major", value: "Yes" },
  { id: 6, header: "Water Depth", value: "187 feet" },
  { id: 7, header: "Manned", value: "No" },
  { id: 8, header: "Well Slots", value: "18" },
  { id: 9, header: "Slots Used", value: "15" },
  { id: 10, header: "Subsea Wells", value: "0" },
  { id: 11, header: "Satellite Wells", value: "0" },
  { id: 12, header: "Cranes", value: "1" },
  { id: 13, header: "Quarters", value: "PERM" },
  { id: 14, header: "Bunks", value: "32" },
  { id: 15, header: "Decks", value: "2" },
  { id: 16, header: "Prod. Eqpt.", value: "Yes" },
  { id: 17, header: "Compressor", value: "No" },
  { id: 18, header: "Tanks", value: "No" },
  { id: 19, header: "Generator", value: "Yes" },
  { id: 20, header: "Fired Eqpt.", value: "2" },
  { id: 21, header: "Helideck", value: "Yes" },
  { id: 22, header: "H2S", value: "No" },
  { id: 23, header: "To Shore", value: "47.1 miles" },
  { id: 24, header: "lease PROD", value: "G01031" },
  { id: 25, header: "X coordinate", value: "2,083,550'" },
  { id: 26, header: "Y coordinate", value: "‐105,744'" },
  { id: 27, header: "Longitude", value: "‐91d ‐4' ‐25''" },
  { id: 28, header: "Latitude", value: "28d 22' 32''" }
];

const Pipelines = [
  "Segment",
  "Operator",
  "Origin",
  "Destination",
  "OD‐MAWP",
  "OD‐MAWP",
  "Status Date",
  1761,
  "Fieldwood",
  "SS0253‐D",
  "SS0253‐E",
  "04‐1440",
  "OUT‐GAS",
  "01 Aug 2016",
  1765,
  "Fieldwood",
  "SS0253‐E",
  "SS0253‐C",
  "06‐1440",
  "OUT‐G/O",
  "01 Aug 2016"
];

const Wells = [
  { id: 1, Name: "SS0253‐E001", Status: "COM‐GP", Updated: "21 Jun 2010" },
  { id: 2, name: "SS0253‐E002", Status: "COM‐GP", Updated: "24 Nov 1981" },
  { id: 3, name: "SS0253‐E003", Status: "COM‐GP", Updated: "06 Dec 1981" },
  { id: 4, name: "SS0253‐E004", Status: "COM‐GP", Updated: "09 Oct 1981" },
  { id: 5, name: "SS0253‐E005", Status: "COM‐GP", Updated: "25 Dec 1981" },
  { id: 6, name: "SS0253‐E006", Status: "COM‐OGP", Updated: "09 Jan 1982" },
  { id: 7, name: "SS0253‐E007", Status: "TA‐OGS", Updated: "29 Dec 2004" },
  { id: 8, name: "SS0253‐E008", Status: "TA‐OGS", Updated: "29 Dec 2004" },
  { id: 9, name: "SS0253‐E009", Status: "COM‐GP", Updated: "21 Jun 2010" },
  { id: 10, name: "SS0253‐E010", Status: "COM‐GP", Updated: "24 Nov 1981" },
  { id: 11, name: "SS0253‐E011", Status: "COM‐GP", Updated: "06 Dec 1981" },
  { id: 12, name: "SS0253‐E012", Status: "COM‐GP", Updated: "09 Oct 1981" },
  { id: 13, name: "SS0253‐E013", Status: "COM‐GP", Updated: "25 Dec 1981" },
  { id: 14, name: "SS0253‐E014", Status: "TA‐GS", Updated: "09 Jan 1982" },
  { id: 15, name: "SS0253‐E015", Status: "COM‐GP", Updated: "14 Apr 1996" }
];

const platformRating = [
  {
    id: 1,
    area: "Helideck",
    coating: "NA",
    description: "The helideck area is barricaded and out of service."
  },
  {
    id: 2,
    area: "Main Deck",
    coating: "NA",
    description:
      "The coating on the main deck columns and braces is in poor condition with scattered moderate to heavy active pitting covering approximately 10 % of the surface."
  },
  {
    id: 3,
    area: "Flare Boom",
    coating: "NA",
    description:
      "The coating on the flare boom is in fair condition with moderate surface corrosion, active pitting and scale covering approximately 10 % of the surface."
  },
  {
    id: 4,
    area: "Cellar Deck",
    coating: "NA",
    description:
      "There is heavy active pitting and scaling on approximately 75% of the surface on the cellar deck columns."
  },
  {
    id: 5,
    area: "Well Deck",
    coating: "NA",
    description:
      "The coating on the wellhead deck is in good condition with light to moderate surface corrosion covering approximately 10 % of the surface, isolated mainly on the underside."
  },
  {
    id: 6,
    area: "Jacket",
    coating: "NA",
    description:
      "The coating throughout the top of jacket and it's components is in poor condition, with heavy pitting, scaling and metal loss on approximately 95%."
  },
  {
    id: 7,
    area: "Boatlanding",
    coating: "NA",
    description:
      "TA new boat landing has been installed on the SW corner, and the coating is in good condition."
  }
];

const damage = [
  {
    id: 1,
    area: "Helideck",
    damage: "OOS",
    description: "OUT OF SERVICE"
  },
  {
    id: 2,
    area: "Main Deck",
    damage: "Noticeable Damage",
    description: "Heavy metal deterioration throughout main deck grating."
  },
  {
    id: 3,
    area: "Flare Boom",
    damage: "NA",
    description: ""
  },
  {
    id: 4,
    area: "Cellar Deck",
    damage: "NA",
    description: "Damage was noted on the handrails and grating."
  },
  {
    id: 5,
    area: "Well Deck",
    damage: "NA",
    description: ""
  },
  {
    id: 6,
    area: "Jacket",
    damage: "NA",
    description: "Holes in the top jacket braces were noted throughout."
  },
  {
    id: 7,
    area: "Boatlanding",
    damage: "NA",
    description: ""
  }
];

const PipelinesInfo = [
  "Segment Number",
  "API RP 14 C",
  "Drawing Reference",
  "Isolation Flange (Iso)",
  "Iso Flange Working",
  "C.P. Above Iso Flange",
  "C.P. Below Iso Flange",
  1765,
  "KAQ‐4600",
  "1",
  "Yes",
  "Yes",
  "‐993 mV",
  "‐992 mV",
  1761,
  "KAQ‐4600",
  "1",
  "Yes",
  "Yes",
  "‐993 mV",
  "‐992 mV",
  { id: 1, number: "PSN", coating: "Coating", condition: "Coating Condition" },
  {
    id: 2,
    number: "1765",
    coating: "C‐Poor",
    condition:
      "The coating on riser is in poor condition with heavy blistering."
  },
  {
    id: 3,
    number: "1765",
    coating: "C‐Poor",
    condition:
      "The coating on riser is in poor condition with heavy blistering."
  },
  { id: 4, number: "PSN", coating: "Damage", condition: "Damage Description" },
  {
    id: 5,
    number: "1765",
    coating: "Corrosion",
    condition: "Metal loss due to heavy surface corrosion."
  },
  {
    id: 6,
    number: "1765",
    coating: "Corrosion",
    condition: "Metal loss due to heavy surface corrosion."
  }
];

const PipelineClamps = [
  {
    id: 1,
    reference: "1",
    type: "Saddle",
    evalution: "0'",
    Bolts: "Heavy surface corrosion",
    platform: "Welded",
    clamp: "0'",
    missing: "Heavy surface corrosion"
  },
  {
    id: 2,
    reference: "1",
    type: "Saddle",
    evalution: "0'",
    Bolts: "Heavy surface corrosion",
    platform: "Welded",
    clamp: "0'",
    missing: "Heavy surface corrosion"
  },
  {
    id: 3,
    reference: "1",
    type: "Saddle",
    evalution: "0'",
    Bolts: "Heavy surface corrosion",
    platform: "Welded",
    clamp: "0'",
    missing: "Heavy surface corrosion"
  },
  {
    id: 4,
    reference: "1",
    type: "Saddle",
    evalution: "0'",
    Bolts: "Heavy surface corrosion",
    platform: "Welded",
    clamp: "0'",
    missing: "Heavy surface corrosion"
  },
  {
    id: 5,
    reference: "1",
    type: "Saddle",
    evalution: "0'",
    Bolts: "Heavy surface corrosion",
    platform: "Welded",
    clamp: "0'",
    missing: "Heavy surface corrosion"
  },
  {
    id: 6,
    reference: "1",
    type: "Saddle",
    evalution: "0'",
    Bolts: "Heavy surface corrosion",
    platform: "Welded",
    clamp: "0'",
    missing: "Heavy surface corrosion"
  },
  {
    id: 7,
    reference: "1",
    type: "Saddle",
    evalution: "0'",
    Bolts: "Heavy surface corrosion",
    platform: "Welded",
    clamp: "0'",
    missing: "Heavy surface corrosion"
  },
  {
    id: 8,
    reference: "1",
    type: "Saddle",
    evalution: "0'",
    Bolts: "Heavy surface corrosion",
    platform: "Welded",
    clamp: "0'",
    missing: "Heavy surface corrosion"
  }
];

const Readings = [
  {
    id: 1,
    location: "Top of Jacket",
    year: "2016",
    leg: "A2'",
    ten: "‐1,005 mV",
    twenty: "‐1,005 mV",
    thirty: "‐1,004 mV'",
    footy: "‐1,004 mV"
  },
  {
    id: 2,
    location: "Top of Jacket",
    year: "2016",
    leg: "A2'",
    ten: "‐1,005 mV",
    twenty: "‐1,005 mV",
    thirty: "‐1,004 mV'",
    footy: "‐1,004 mV"
  },
  {
    id: 3,
    location: "Top of Jacket",
    year: "2016",
    leg: "A2'",
    ten: "‐1,005 mV",
    twenty: "‐1,005 mV",
    thirty: "‐1,004 mV'",
    footy: "‐1,004 mV"
  },
  {
    id: 4,
    location: "Top of Jacket",
    year: "2016",
    leg: "A2'",
    ten: "‐1,005 mV",
    twenty: "‐1,005 mV",
    thirty: "‐1,004 mV'",
    footy: "‐1,004 mV"
  },
  {
    id: 5,
    location: "Top of Jacket",
    year: "2016",
    leg: "A2'",
    ten: "‐1,005 mV",
    twenty: "‐1,005 mV",
    thirty: "‐1,004 mV'",
    footy: "‐1,004 mV"
  },
  {
    id: 6,
    location: "Top of Jacket",
    year: "2016",
    leg: "A2'",
    ten: "‐1,005 mV",
    twenty: "‐1,005 mV",
    thirty: "‐1,004 mV'",
    footy: "‐1,004 mV"
  },
  {
    id: 7,
    location: "Top of Jacket",
    year: "2016",
    leg: "A2'",
    ten: "‐1,005 mV",
    twenty: "‐1,005 mV",
    thirty: "‐1,004 mV'",
    footy: "‐1,004 mV"
  },
  {
    id: 8,
    location: "Top of Jacket",
    year: "2016",
    leg: "A2'",
    ten: "‐1,005 mV",
    twenty: "‐1,005 mV",
    thirty: "‐1,004 mV'",
    footy: "‐1,004 mV"
  },
  {
    id: 9,
    location: "Top of Jacket",
    year: "2016",
    leg: "A2'",
    ten: "‐1,005 mV",
    twenty: "‐1,005 mV",
    thirty: "‐1,004 mV'",
    footy: "‐1,004 mV"
  },
  {
    id: 10,
    location: "Top of Jacket",
    year: "2016",
    leg: "A2'",
    ten: "‐1,005 mV",
    twenty: "‐1,005 mV",
    thirty: "‐1,004 mV'",
    footy: "‐1,004 mV"
  },
  {
    id: 11,
    location: "Top of Jacket",
    year: "2016",
    leg: "A2'",
    ten: "‐1,005 mV",
    twenty: "‐1,005 mV",
    thirty: "‐1,004 mV'",
    footy: "‐1,004 mV"
  },
  {
    id: 12,
    location: "Top of Jacket",
    year: "2016",
    leg: "A2'",
    ten: "‐1,005 mV",
    twenty: "‐1,005 mV",
    thirty: "‐1,004 mV'",
    footy: "‐1,004 mV"
  },
  {
    id: 13,
    location: "Top of Jacket",
    year: "2016",
    leg: "A2'",
    ten: "‐1,005 mV",
    twenty: "‐1,005 mV",
    thirty: "‐1,004 mV'",
    footy: "‐1,004 mV"
  },
  {
    id: 14,
    location: "Top of Jacket",
    year: "2016",
    leg: "A2'",
    ten: "‐1,005 mV",
    twenty: "‐1,005 mV",
    thirty: "‐1,004 mV'",
    footy: "‐1,004 mV"
  },
  {
    id: 15,
    location: "Top of Jacket",
    year: "2016",
    leg: "A2'",
    ten: "‐1,005 mV",
    twenty: "‐1,005 mV",
    thirty: "‐1,004 mV'",
    footy: "‐1,004 mV"
  },
  {
    id: 16,
    location: "Top of Jacket",
    year: "2016",
    leg: "A2'",
    ten: "‐1,005 mV",
    twenty: "‐1,005 mV",
    thirty: "‐1,004 mV'",
    footy: "‐1,004 mV"
  }
];

const conductorsDamage = [
  {
    id: 1,
    name: "SS0253‐E003",
    slot: "A1",
    coating: "Broken",
    condition:
      "Poor coating condition on conductor Slot A1 blistering scale and pitting covering 92% of the conductor surface"
  },
  {
    id: 2,
    name: "SS0253‐E003",
    slot: "A1",
    coating: "Broken",
    condition:
      "Poor coating condition on conductor Slot A1 blistering scale and pitting covering 92% of the conductor surface"
  },
  {
    id: 3,
    name: "SS0253‐E003",
    slot: "A1",
    coating: "Broken",
    condition:
      "Poor coating condition on conductor Slot A1 blistering scale and pitting covering 92% of the conductor surface"
  },
  {
    id: 4,
    name: "SS0253‐E003",
    slot: "A1",
    coating: "Broken",
    condition:
      "Poor coating condition on conductor Slot A1 blistering scale and pitting covering 92% of the conductor surface"
  },
  {
    id: 5,
    name: "SS0253‐E003",
    slot: "A1",
    coating: "Broken",
    condition:
      "Poor coating condition on conductor Slot A1 blistering scale and pitting covering 92% of the conductor surface"
  },
  {
    id: 6,
    name: "SS0253‐E003",
    slot: "A1",
    coating: "Broken",
    condition:
      "Poor coating condition on conductor Slot A1 blistering scale and pitting covering 92% of the conductor surface"
  },
  {
    id: 7,
    name: "SS0253‐E003",
    slot: "A1",
    coating: "Broken",
    condition:
      "Poor coating condition on conductor Slot A1 blistering scale and pitting covering 92% of the conductor surface"
  },
  {
    id: 8,
    name: "SS0253‐E003",
    slot: "A1",
    coating: "Broken",
    condition:
      "Poor coating condition on conductor Slot A1 blistering scale and pitting covering 92% of the conductor surface"
  },
  {
    id: 9,
    name: "SS0253‐E003",
    slot: "A1",
    coating: "Broken",
    condition:
      "Poor coating condition on conductor Slot A1 blistering scale and pitting covering 92% of the conductor surface"
  },
  {
    id: 10,
    name: "SS0253‐E003",
    slot: "A1",
    coating: "Broken",
    condition:
      "Poor coating condition on conductor Slot A1 blistering scale and pitting covering 92% of the conductor surface"
  },
  {
    id: 11,
    name: "SS0253‐E003",
    slot: "A1",
    coating: "Broken",
    condition:
      "Poor coating condition on conductor Slot A1 blistering scale and pitting covering 92% of the conductor surface"
  },
  {
    id: 12,
    name: "SS0253‐E003",
    slot: "A1",
    coating: "Broken",
    condition:
      "Poor coating condition on conductor Slot A1 blistering scale and pitting covering 92% of the conductor surface"
  },
  {
    id: 13,
    name: "SS0253‐E003",
    slot: "A1",
    coating: "Broken",
    condition:
      "Poor coating condition on conductor Slot A1 blistering scale and pitting covering 92% of the conductor surface"
  },
  {
    id: 14,
    name: "SS0253‐E003",
    slot: "C5",
    coating: "No",
    condition:
      "Poor coating condition on conductor Slot A1 blistering scale and pitting covering 92% of the conductor surface"
  }
];

const conductors = [
  {
    id: 1,
    name: "SS0253‐E003",
    slot: "A1",
    coating: "C‐Poor",
    condition:
      "Poor coating condition on conductor Slot A1 blistering scale and pitting covering 92% of the conductor surface"
  },
  {
    id: 2,
    name: "SS0253‐E003",
    slot: "A1",
    coating: "C‐Poor",
    condition:
      "Poor coating condition on conductor Slot A1 blistering scale and pitting covering 92% of the conductor surface"
  },
  {
    id: 3,
    name: "SS0253‐E003",
    slot: "A1",
    coating: "C‐Poor",
    condition:
      "Poor coating condition on conductor Slot A1 blistering scale and pitting covering 92% of the conductor surface"
  },
  {
    id: 4,
    name: "SS0253‐E003",
    slot: "A1",
    coating: "C‐Poor",
    condition:
      "Poor coating condition on conductor Slot A1 blistering scale and pitting covering 92% of the conductor surface"
  },
  {
    id: 5,
    name: "SS0253‐E003",
    slot: "A1",
    coating: "C‐Poor",
    condition:
      "Poor coating condition on conductor Slot A1 blistering scale and pitting covering 92% of the conductor surface"
  },
  {
    id: 6,
    name: "SS0253‐E003",
    slot: "A1",
    coating: "C‐Poor",
    condition:
      "Poor coating condition on conductor Slot A1 blistering scale and pitting covering 92% of the conductor surface"
  },
  {
    id: 7,
    name: "SS0253‐E003",
    slot: "A1",
    coating: "C‐Poor",
    condition:
      "Poor coating condition on conductor Slot A1 blistering scale and pitting covering 92% of the conductor surface"
  },
  {
    id: 8,
    name: "SS0253‐E003",
    slot: "A1",
    coating: "C‐Poor",
    condition:
      "Poor coating condition on conductor Slot A1 blistering scale and pitting covering 92% of the conductor surface"
  },
  {
    id: 9,
    name: "SS0253‐E003",
    slot: "A1",
    coating: "C‐Poor",
    condition:
      "Poor coating condition on conductor Slot A1 blistering scale and pitting covering 92% of the conductor surface"
  },
  {
    id: 10,
    name: "SS0253‐E003",
    slot: "A1",
    coating: "C‐Poor",
    condition:
      "Poor coating condition on conductor Slot A1 blistering scale and pitting covering 92% of the conductor surface"
  },
  {
    id: 11,
    name: "SS0253‐E003",
    slot: "A1",
    coating: "C‐Poor",
    condition:
      "Poor coating condition on conductor Slot A1 blistering scale and pitting covering 92% of the conductor surface"
  },
  {
    id: 12,
    name: "SS0253‐E003",
    slot: "A1",
    coating: "C‐Poor",
    condition:
      "Poor coating condition on conductor Slot A1 blistering scale and pitting covering 92% of the conductor surface"
  },
  {
    id: 13,
    name: "SS0253‐E003",
    slot: "A1",
    coating: "C‐Poor",
    condition:
      "Poor coating condition on conductor Slot A1 blistering scale and pitting covering 92% of the conductor surface"
  },
  {
    id: 14,
    name: "SS0253‐E003",
    slot: "A1",
    coating: "C‐Poor",
    condition:
      "Poor coating condition on conductor Slot A1 blistering scale and pitting covering 92% of the conductor surface"
  },
  {
    id: 15,
    name: "SS0253‐E003",
    slot: "A1",
    coating: "C‐Poor",
    condition:
      "Poor coating condition on conductor Slot A1 blistering scale and pitting covering 92% of the conductor surface"
  },
  {
    id: 16,
    name: "SS0253‐E013",
    slot: "C5",
    coating: "C‐Poor",
    condition:
      "Poor coating condition on conductor Slot C5 blistering scale and pitting covering 84% of the conductor surface"
  }
];
