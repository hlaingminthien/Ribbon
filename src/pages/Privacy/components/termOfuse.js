import React from "react";

export const TermOfUse = () => {
  return (
    <div>
      <h2 className="py-4">Term of Use</h2>

      <div
        class="d-flex flex-row border-bottom justify-content-between"
        //   type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        <div>1. Use of Website</div>
        <div>
          <i className="fa fa-chevron-down" />
        </div>
      </div>
      <div class="collapse py-4" id="collapseExample">
        <p>
          a. Thank you for visiting the website (the "Website") of the National
          University Health System Pte. Ltd ("NUHS"). and its entities
          (collectively referred to as the "NUHS Group" and each entity within
          the NUHS Group to be referred to as "NUHS Entity"). The Terms of Use
          are applicable to the Websites of each NUHS Entity. Any reference to
          "NUHS" below shall mean and read as NUHS or the NUHS Entity whose
          Website you have accessed or both (as applicable). By accessing and
          using this Website, you shall be deemed to have accepted to be legally
          bound by these Terms of Use. If you do not agree to these Terms of
          Use, please do not use this Website.
          <br /> b. These Terms of Use may be changed from time to time. Changes
          will be posted on this page and your use of this Website after such
          changes have been posted will constitute your agreement to the
          modified Terms of Use and all of the changes.
          <br /> c. Other terms of use (which will be indicated to you) may
          apply if you are re-directed to other websites. d.
          <br /> NUHS may modify and discontinue any information or features
          that form part of this Website at any time, with or without notice to
          you, and without liability.
        </p>
      </div>
      <p>
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
