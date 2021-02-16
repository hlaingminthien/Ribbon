 import React from "react";
import font from "../../../app/config/font";

export const TermOfUse = () => {
  return (
    <div style={{lineHeight: window.innerWidth < 600 ? " 22px" : "26px" }}>
      <h2 className="py-4">Term of Use</h2>
      <div
        className="d-flex flex-row border-bottom justify-content-between px-2 py-2"
        data-bs-toggle="collapse"
        data-bs-target="#no1"
        aria-expanded="false"
        aria-controls="no1"
        
      >
        <div>1. Use of Website</div>
        <div>
          <i className="fa fa-chevron-down" />
        </div>
      </div>
      <div className="collapse" id="no1" style={{ fontSize: window.innerWidth > 1600 ? font.desktopBody : (window.innerWidth > 1200 && window.innerWidth < 1601) ? font.desktopBody : window.innerWidth < 600 ? font.mobileBody : font.tabletBody,  }}>
        <div className='p-2'>
          <ol className="" style={{ listStyleType: 'lower-alpha', fontSize: window.innerWidth > 1600 ? font.tabletBody : (window.innerWidth > 1200 && window.innerWidth < 1601) ? font.tabletBody : window.innerWidth < 600 ? font.mobileBody : 12, lineHeight: window.innerWidth < 600 ? "22px": "26px" }}>
            <li>Thank you for visiting the website (the "Website") of the National University Health System Pte. Ltd ("NUHS"). and its entities (collectively referred to as the "NUHS Group" and each entity within the NUHS Group to be referred to as "NUHS Entity"). The Terms of Use are applicable to the Websites of each NUHS Entity. Any reference to "NUHS" below shall mean and read as NUHS or the NUHS Entity whose Website you have accessed or both (as applicable). By accessing and using this Website, you shall be deemed to have accepted to be legally bound by these Terms of Use. If you do not agree to these Terms of Use, please do not use this Website.
          </li>
            <li>
              These Terms of Use may be changed from time to time. Changes will be posted on this page and your use of this Website after such changes have been posted will constitute your agreement to the modified Terms of Use and all of the changes.
            </li>
            <li>
              Other terms of use (which will be indicated to you) may apply if you are re-directed to other websites.
          </li>
            <br />
            <li>
              NUHS may modify and discontinue any information or features that form part of this Website at any time, with or without notice to you, and without liability.
          </li>
          </ol>
        </div>

      </div>
      <div
        className="d-flex flex-row border-bottom justify-content-between px-2 py-2"
        data-bs-toggle="collapse"
        data-bs-target="#no2"
        aria-expanded="false"
        aria-controls="no2"
      >
        <div>2. Proprietary Rights</div>
        <div>
          <i className="fa fa-chevron-down" />
        </div>
      </div>
      <div className="collapse" id="no2" style={{ fontSize: window.innerWidth > 1600 ? font.desktopBody : (window.innerWidth > 1200 && window.innerWidth < 1601) ? font.desktopBody : window.innerWidth < 600 ? font.mobileBody : font.tabletBody, lineHeight:'22px' }}>
        <p className="p-2" style={{ listStyleType: 'lower-alpha',fontSize: window.innerWidth > 1600 ? font.desktopBody : (window.innerWidth > 1200 && window.innerWidth < 1601) ? font.desktopBody : window.innerWidth < 600 ? font.mobileBody : 12, lineHeight: window.innerWidth < 600 ? "22px" : '26px'}}>
          This Website is maintained by NUHS. The materials located on this Website including the information and software programmes (the "Contents"), are protected by copyright, trademark and other forms of proprietary rights. All rights, title and interest in the Contents are owned by, licensed to or contpled by NUHS.
        </p>

      </div>
      <div
        className="d-flex flex-row border-bottom justify-content-between px-2 py-2"
        data-bs-toggle="collapse"
        data-bs-target="#no3"
        aria-expanded="false"
        aria-controls="no3"
      >
        <div>3. Restrictions on Use</div>
        <div>
          <i className="fa fa-chevron-down" />
        </div>
      </div>
      <div className="collapse" id="no3" style={{ fontSize: window.innerWidth > 1600 ? font.desktopBody : (window.innerWidth > 1200 && window.innerWidth < 1601) ? font.desktopBody : window.innerWidth < 600 ? font.mobileBody : font.tabletBody, lineHeight: window.innerWidth < 600 ? "22px" : '26px' }}>
        <p className="p-2" style={{ listStyleType: 'lower-alpha',fontSize: window.innerWidth > 1600 ? font.desktopBody : (window.innerWidth > 1200 && window.innerWidth < 1601) ? font.desktopBody : window.innerWidth < 600 ? font.mobileBody : 12, lineHeight: window.innerWidth < 600 ? "22px" : '26px'}}>
          Except as otherwise provided, the Contents of this Website shall not be reproduced, re-published, uploaded, posted, transmitted or otherwise distributed in any way, without the prior written permission of NUHS. Modification of any of the Contents or use of the Contents for any other purpose will be a violation of NUHS's copyright and other intellectual property rights. Graphics and images on this Website are protected by copyright and may not be reproduced or appropriated in any manner without the prior written permission of NUHS.
      </p>

      </div>
      <div
        className="d-flex flex-row border-bottom justify-content-between px-2 py-2"
        data-bs-toggle="collapse"
        data-bs-target="#no4"
        aria-expanded="false"
        aria-controls="no4"
      >
        <div>4. Warranty Disclaimer</div>
        <div>
          <i className="fa fa-chevron-down" />
        </div>
      </div>
      <div className="collapse" id="no4" style={{ fontSize: window.innerWidth > 1600 ? font.desktopBody : (window.innerWidth > 1200 && window.innerWidth < 1601) ? font.desktopBody : window.innerWidth < 600 ? font.mobileBody : font.tabletBody, lineHeight: window.innerWidth < 600 ? "22px" : '26px' }}>
        <p className="p-2" style={{ listStyleType: 'lower-alpha',fontSize: window.innerWidth > 1600 ? font.desktopBody : (window.innerWidth > 1200 && window.innerWidth < 1601) ? font.desktopBody : window.innerWidth < 600 ? font.mobileBody : 12, lineHeight: window.innerWidth < 600 ? "22px" : '26px'}}>
          The Contents of this Website are provided on an "as is" basis without warranties of any kind. To the fullest extent permitted by law, NUHS does not warrant and hereby disclaims any warranty:
        </p>
        <div className='p-2'>
          <ol className="" style={{ listStyleType: 'lower-alpha',fontSize: window.innerWidth > 1600 ? font.desktopBody : (window.innerWidth > 1200 && window.innerWidth < 1601) ? font.desktopBody : window.innerWidth < 600 ? font.mobileBody : 12, lineHeight: window.innerWidth < 600 ? "22px" : '26px'}}>
            <li>
              as to the accuracy, reliability, authenticity, completeness or fitness for any particular purpose of the Contents of this Website;
          </li>
            <li>
              that defects will be corrected or that this Website and the server is and will be free of all viruses and/or other harmful elements.
            </li>
            <li>
              Other terms of use (which will be indicated to you) may apply if you are re-directed to other websites.
          </li>

          </ol>
        </div>

      </div>
      <div
        className="d-flex flex-row border-bottom justify-content-between px-2 py-2"
        data-bs-toggle="collapse"
        data-bs-target="#no5"
        aria-expanded="false"
        aria-controls="no5"
      >
        <div>5. Limitation of Liability</div>
        <div>
          <i className="fa fa-chevron-down" />
        </div>
      </div>
      <div className="collapse" id="no5" style={{ fontSize: window.innerWidth > 1600 ? font.desktopBody : (window.innerWidth > 1200 && window.innerWidth < 1601) ? font.desktopBody : window.innerWidth < 600 ? font.mobileBody : font.tabletBody, lineHeight: window.innerWidth < 600 ? "22px" : '26px' }}>
        <p className="p-2" style={{ listStyleType: 'lower-alpha',fontSize: window.innerWidth > 1600 ? font.desktopBody : (window.innerWidth > 1200 && window.innerWidth < 1601) ? font.desktopBody : window.innerWidth < 600 ? font.mobileBody : 12, lineHeight: window.innerWidth < 600 ? "22px" : '26px'}}>
          NUHS shall not be liable for any damage or loss of any kind caused as a result (direct or indirect) of the use of the Website, including but not limited to any damage or loss suffered as a result of reliance on the Contents contained in or available from the Website. Your sole remedy for dissatisfaction with this Website is to stop using this Website.
        </p>

      </div>
      <div
        className="d-flex flex-row border-bottom justify-content-between px-2 py-2"
        data-bs-toggle="collapse"
        data-bs-target="#no6"
        aria-expanded="false"
        aria-controls="no6"
      >
        <div>6. Indemnity</div>
        <div>
          <i className="fa fa-chevron-down" />
        </div>
      </div>
      <div className="collapse" id="no6" style={{ fontSize: window.innerWidth > 1600 ? font.desktopBody : (window.innerWidth > 1200 && window.innerWidth < 1601) ? font.desktopBody : window.innerWidth < 600 ? font.mobileBody : font.tabletBody, lineHeight: window.innerWidth < 600 ? "22px" : '26px' }}>
        <p className="p-2" style={{ listStyleType: 'lower-alpha',fontSize: window.innerWidth > 1600 ? font.desktopBody : (window.innerWidth > 1200 && window.innerWidth < 1601) ? font.desktopBody : window.innerWidth < 600 ? font.mobileBody : 12, lineHeight: window.innerWidth < 600 ? "22px" : '26px'}}>
          You agree to indemnify, defend and hold NUHS their directors, officers and employees harmless from and against any loss, liability, claim, demand, damages, costs and expenses, including reasonable legal fees, arising out of or in connection with your use of or connection to this Website or any violation of these Terms of Use or of any law or the rights of any third party.
        </p>

      </div>
      <div
        className="d-flex flex-row border-bottom justify-content-between px-2 py-2"
        data-bs-toggle="collapse"
        data-bs-target="#no7"
        aria-expanded="false"
        aria-controls="no7"
      >
        <div>7. No Medical Advice</div>
        <div>
          <i className="fa fa-chevron-down" />
        </div>
      </div>
      <div className="collapse" id="no7" style={{ fontSize: window.innerWidth > 1600 ? font.desktopBody : (window.innerWidth > 1200 && window.innerWidth < 1601) ? font.desktopBody : window.innerWidth < 600 ? font.mobileBody : font.tabletBody, lineHeight: window.innerWidth < 600 ? "22px" : '26px' }}>
        <div className='p-2'>
          <ol className="" style={{ listStyleType: 'lower-alpha',fontSize: window.innerWidth > 1600 ? font.desktopBody : (window.innerWidth > 1200 && window.innerWidth < 1601) ? font.desktopBody : window.innerWidth < 600 ? font.mobileBody : 12, lineHeight: window.innerWidth < 600 ? "22px" : '26px'}}>
            <li>
              This Website provides general information only. The information should not be taken as any medical advice or recommendation or considered as a replacement for consultation with a healthcare professional and does not create any patient-physician relationship, and should not be used as a substitute for professional diagnosis and treatment.
          </li>
            <li>
              If you have questions or concerns related to your health, physical fitness or medical conditions, you should seek the advice of your doctor or a qualified healthcare provider before starting any course of treatment.
            </li>
          </ol>
        </div>
      </div>
      <div
        className="d-flex flex-row border-bottom justify-content-between px-2 py-2"
        data-bs-toggle="collapse"
        data-bs-target="#no8"
        aria-expanded="false"
        aria-controls="no8"
      >
        <div>8. Right of Access</div>
        <div>
          <i className="fa fa-chevron-down" />
        </div>
      </div>
      <div className="collapse" id="no8" style={{ fontSize: window.innerWidth > 1600 ? font.desktopBody : (window.innerWidth > 1200 && window.innerWidth < 1601) ? font.desktopBody : window.innerWidth < 600 ? font.mobileBody : font.tabletBody, lineHeight: window.innerWidth < 600 ? "22px" : '26px' }}>
        <p className="p-2" style={{ listStyleType: 'lower-alpha',fontSize: window.innerWidth > 1600 ? font.desktopBody : (window.innerWidth > 1200 && window.innerWidth < 1601) ? font.desktopBody : window.innerWidth < 600 ? font.mobileBody : 12, lineHeight: window.innerWidth < 600 ? "22px" : '26px'}}>
          NUHS reserves all rights to deny or restrict access to this Website to any particular person, or to block access from a particular Internet address to this Website, or to disable any unauthorised link or frames at any time, without ascribing any reasons whatsoever.
        </p>
      </div>
      <div
        className="d-flex flex-row border-bottom justify-content-between px-2 py-2"
        data-bs-toggle="collapse"
        data-bs-target="#no9"
        aria-expanded="false"
        aria-controls="no9"
      >
        <div>9. Links from this Website</div>
        <div>
          <i className="fa fa-chevron-down" />
        </div>
      </div>
      <div className="collapse" id="no9" style={{ fontSize: window.innerWidth > 1600 ? font.desktopBody : (window.innerWidth > 1200 && window.innerWidth < 1601) ? font.desktopBody : window.innerWidth < 600 ? font.mobileBody : font.tabletBody, lineHeight: window.innerWidth < 600 ? "22px" : '26px' }}>
        <div className='p-2'>
          <ol className="" style={{ listStyleType: 'lower-alpha',fontSize: window.innerWidth > 1600 ? font.desktopBody : (window.innerWidth > 1200 && window.innerWidth < 1601) ? font.desktopBody : window.innerWidth < 600 ? font.mobileBody : 12, lineHeight: window.innerWidth < 600 ? "22px" : '26px'}}>
            <li>
              This Website contains hyperlinks to other websites which are not maintained by NUHS and therefore it is not responsible for the contents of those websites and shall not be liable for any damages or loss arising from access to those websites. Use of the hyperlinks and access to such websites are entirely at your own risk.
          </li>
            <li>
              Hyperlinks to other websites are provided as a convenience. Under no circumstances shall NUHS be considered to be associated or affiliated with any trade or service marks, logos, insignia or other devices used or appearing on websites to which this Website is linked.
            </li>
          </ol>
        </div>
      </div>
      <div
        className="d-flex flex-row border-bottom justify-content-between px-2 py-2"
        data-bs-toggle="collapse"
        data-bs-target="#no10"
        aria-expanded="false"
        aria-controls="no10"
      >
        <div>10. Links to this Website</div>
        <div>
          <i className="fa fa-chevron-down" />
        </div>
      </div>
      <div className="collapse" id="no10" style={{ fontSize: window.innerWidth > 1600 ? font.desktopBody : (window.innerWidth > 1200 && window.innerWidth < 1601) ? font.desktopBody : window.innerWidth < 600 ? font.mobileBody : font.tabletBody, lineHeight: window.innerWidth < 600 ? "22px" : '26px' }}>
        <div className='p-2'>
          <ol className="" style={{ listStyleType: 'lower-alpha',fontSize: window.innerWidth > 1600 ? font.desktopBody : (window.innerWidth > 1200 && window.innerWidth < 1601) ? font.desktopBody : window.innerWidth < 600 ? font.mobileBody : 12, lineHeight: window.innerWidth < 600 ? "22px" : '26px'}}>
            <li>
              Except as set forth below, caching and links to, and the framing of this Website or any of the Contents are prohibited.
          </li>
            <li>
              You must secure permission from NUHS prior to hyperlinking to or framing this Website or any of the Contents, or engaging in similar activities. NUHS reserves the right to impose conditions when permitting any hyperlinking to or framing of this Website or any of the Contents.
          </li>
            <li>
              Your linking to or framing any part of this Website or its Contents constitutes acceptance of these Terms of Use. This is deemed to be the case even after the posting of any changes or modifications to these Terms of Use. If you do not accept these Terms of Use, you must discontinue linking to or framing this Website or any of the Contents.
          </li>
            <li>
              In no circumstances shall NUHS be considered to be associated or affiliated in any manner with any trade or service marks, logos, insignia or other devices used or appearing on websites that link to this Website or any of the Contents.
          </li>
            <li>
              NUHS reserves the right to disable any links to or frames of any site containing inappropriate, profane, defamatory, infringing, obscene, indecent or unlawful topics, names, material or information that violates any written law, any applicable intellectual property, proprietary, privacy or publicity rights.
          </li>
            <li>
              NUHS reserves the right to disable any unauthorised links or frames and disclaims any responsibility for the content available on any other site reached by links to or from this Website or any of the Contents.
          </li>
            <li>
              NUHS reserves the right to change the URL of this Website.
          </li>
          </ol>
        </div>

      </div>
      <div
        className="d-flex flex-row border-bottom justify-content-between px-2 py-2"
        data-bs-toggle="collapse"
        data-bs-target="#no11"
        aria-expanded="false"
        aria-controls="no11"
      >
        <div>11. Governing Law</div>
        <div>
          <i className="fa fa-chevron-down" />
        </div>
      </div>
      <div className="collapse" id="no11" style={{ fontSize: window.innerWidth > 1600 ? font.desktopBody : (window.innerWidth > 1200 && window.innerWidth < 1601) ? font.desktopBody : window.innerWidth < 600 ? font.mobileBody : font.tabletBody, lineHeight: window.innerWidth < 600 ? "22px" : '26px' }}>
        <p className="p-2" style={{ listStyleType: 'lower-alpha',fontSize: window.innerWidth > 1600 ? font.desktopBody : (window.innerWidth > 1200 && window.innerWidth < 1601) ? font.desktopBody : window.innerWidth < 600 ? font.mobileBody : 12, lineHeight: window.innerWidth < 600 ? "22px" : '26px'}}>
          If any part of these Terms of Use is determined to be invalid or unenforceable by a court of law, it will not affect any other part of these Terms of Use which shall remain in full force and effect. These Terms of Use shall be governed and construed in accordance with laws of the Republic of Singapore and all disputes relating to these Terms of Use shall be resolved in a court in Singapore.
        </p>
      </div>
      <div
        className="d-flex flex-row border-bottom justify-content-between px-2 py-2"
        data-bs-toggle="collapse"
        data-bs-target="#no12"
        aria-expanded="false"
        aria-controls="no12"
      >
        <div>12. Privacy Statement</div>
        <div>
          <i className="fa fa-chevron-down" />
        </div>
      </div>
      <div className="collapse" id="no12" style={{ fontSize: window.innerWidth > 1600 ? font.desktopBody : (window.innerWidth > 1200 && window.innerWidth < 1601) ? font.desktopBody : window.innerWidth < 600 ? font.mobileBody : font.tabletBody, lineHeight: window.innerWidth < 600 ? "22px" : '26px' }}>
        <div className='p-2'>
          <ol className="" style={{ listStyleType: 'lower-alpha',fontSize: window.innerWidth > 1600 ? font.desktopBody : (window.innerWidth > 1200 && window.innerWidth < 1601) ? font.desktopBody : window.innerWidth < 600 ? font.mobileBody : 12, lineHeight: window.innerWidth < 600 ? "22px" : '26px'}}>
            <li>
              If you are only browsing this Website, NUHS does not capture data that allows us to identify you.
          </li>
            <li>
              If you send an email, feedback form or any information to a NUHS Entity through this Website, you will be disclosing personally identifiable data; and the information you send will be collected, used, disclosed and/or retained by NUHS Entity for the purpose of processing your request or inquiry. You will also be consenting to the collection, use, disclosure and/or retention of your personal data by the NUHS Entity in accordance with prevailing Singapore laws.
          </li>
            <li>
              To safeguard your personal data, all electronic storage and transmission of personal data through this Website are secured with appropriate security technologies.
          </li>
            <li>
              This Website may contain links to external sites whose data protection and privacy protection practices may differ from NUHS. We are not responsible for the content and privacy practices of those other sites. You should consult the privacy notices of those sites.
          </li>

          </ol>
        </div>

      </div>
      <p className='pt-3'>
        If you require further information on our data protection policy, please
        contact us at:
        <br />
        NUH Data Protection Office
        <br />
        1800-7789243
        <br />
        NUH_DPOffice@nuhs.edu.sg
      </p>
    </div>
  );
};
