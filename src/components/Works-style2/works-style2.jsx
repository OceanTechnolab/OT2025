/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorksStyle2 = ({ grid, hideFilter, filterPosition }) => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section
      className={`${
        grid ? (grid === 3 ? "three-column" : null) : null
      } portfolio section-padding pb-70`}
    >
      {!hideFilter && (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head text-center">
                <h6 className="wow fadeIn" data-wow-delay=".5s">
                  Portfolio
                </h6>
                <h3 className="wow color-font">
                  Our Recent Web Design &amp; <br /> Some Past Projects.
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={"container"}>
        <div className="row">
          {!hideFilter && (
            <div
              className={`filtering ${
                filterPosition === "center"
                  ? "text-center"
                  : filterPosition === "left"
                  ? "text-left"
                  : "text-right"
              } col-12`}
            >
              <div className="filter">
                <span data-filter="*" className="active">
                  All Templates
                </span>
                <span data-filter=".brand">Business</span>
                <span data-filter=".web">Ecommerce</span>
                <span data-filter=".graphic">Services</span>
                <span data-filter=".brand">Creative</span>
                <span data-filter=".web">Blog&Magzine</span>
                <span data-filter=".graphic">Food</span>
                <span data-filter=".graphic">Beauty&Health</span>
              </div>
            </div>
          )}

          <div className="gallery full-width">

            {/*Basic 6*/}
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items graphic wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="image-container">
                <Link href={`https://takshinfinity.com/`} className="imago wow" target="blank">
                  <img src="/img/portfolio/portfolio/WorkCategory/ActionFigureCollection.webp" alt="Taksh Infinity" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div> 
              <div className="cont">
                <h6>Taksh Infinity</h6>
                <span>
                  <Link href="/works3/works3-dark">Taksh Infinity</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items web wow fadeInUp`}
              data-wow-delay=".1s"
            >
              <div className="image-container">
                <Link href={`https://mightythread.com/`} className="imago wow" target="blank">
                  <img src="/img/portfolio/portfolio/WorkCategory/ClothingSite2.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Clothing Site</h6>
                <span>
                  <Link href="/works3/works3-dark">Clothing Site</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand wow fadeInUp`}
              data-wow-delay=".1s"
            >
              <div className="image-container">
                <Link href={`https://smallworldimmigration.ca/`} className="imago wow" target="blank">
                  <img src="/img/portfolio/portfolio/WorkCategory/ImmigrationServices3.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Immigration Services</h6>
                <span>
                  <Link href="/works3/works3-dark">Immigration Services</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items graphic wow fadeInUp`}
              data-wow-delay=".1s"
            >
              <div className="image-container">
                <Link href={`https://osseous.in/`} className="imago wow" target="blank">
                  <img src="/img/portfolio/portfolio/WorkCategory/OrthopedicManufacturer4.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Orthopedic Manufacture</h6>
                <span>
                  <Link href="/works3/works3-dark">Orthopedic Manufacture</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items web wow fadeInUp`}
              data-wow-delay=".1s"
            >
              <div className="image-container">
                <Link href={`https://curisls.com/`} className="imago wow" target="blank">
                  <img src="/img/portfolio/portfolio/WorkCategory/PharmaceuticalCompany5.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Pharmaceutical Company</h6>
                <span>
                  <Link href="/works3/works3-dark">Pharmaceutical Company</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand wow fadeInUp`}
              data-wow-delay=".1s"
            >
              <div className="image-container">
                <Link href={`https://codexdrugs.in/`} className="imago wow" target="blank">
                  <img src="/img/portfolio/portfolio/WorkCategory/HerbalOnlineStore6.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Herbal Products</h6>
                <span>
                  <Link href="/works3/works3-dark">Herbal Products</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div>
            </div>


            {/*  apex Overseas done*/}
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand wow fadeInUp`}
              data-wow-delay=".1s"
            >
              <div className="image-container">
                <Link href={`https://apexoverseas.co.in/`} className="imago wow" target="blank">
                  <img src="/img/portfolio/portfolio/WorkCategory/apexoverseas-co-by-ocean-technolab.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Apex Overseas</h6>
                <span>
                  <Link href="/works3/works3-dark">Apex Overseas</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div>
            </div>

              {/*Compliance ca firm done */}
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand wow fadeInUp`}
              data-wow-delay=".1s"
            >
              <div className="image-container">
                <Link href={`https://probal.in/`} className="imago wow" target="blank">
                  <img src="/img/portfolio/portfolio/WorkCategory/ComplianceandCAFirm7.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Compliance and CA Firm</h6>
                <span>
                  <Link href="/works3/works3-dark">Compliance and CA Firm</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div>
            </div>

            {/*Digital Marketing Company done*/}
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand wow fadeInUp`}
              data-wow-delay=".1s"
            >
              <div className="image-container">
                <Link href={`https://flyingbees.in/`} className="imago wow" target="blank">
                  <img src="/img/portfolio/portfolio/WorkCategory/DigitalMarketingCompany8.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Digital Marketing Company</h6>
                <span>
                  <Link href="/works3/works3-dark">Digital Marketing Company</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div>
            </div>

            {/*Toastmasters International Club done*/}
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand wow fadeInUp`}
              data-wow-delay=".1s"
            >
              <div className="image-container">
                <Link href={`https://district98.org/`} className="imago wow" target="blank">
                  <img src="/img/portfolio/portfolio/WorkCategory/ToastmastersClub.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Toastmasters International Club</h6>
                <span>
                  <Link href="/works3/works3-dark">Toastmasters International Club</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div>
            </div>

            {/*Sourcing Company done*/}
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand wow fadeInUp`}
              data-wow-delay=".1s"
            >
              <div className="image-container">
                <Link href={`https://hastensourcing.com/`} className="imago wow" target="blank">
                  <img src="/img/portfolio/portfolio/WorkCategory/SourcingCom.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Sourcing Company</h6>
                <span>
                  <Link href="/works3/works3-dark">Sourcing Company</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div>
            </div>

            {/*Custom Home Building Services done*/}
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand wow fadeInUp`}
              data-wow-delay=".1s"
            >
              <div className="image-container">
                <Link href={`https://empirecustomhomes.ca/`} className="imago wow" target="blank">
                  <img src="/img/portfolio/portfolio/WorkCategory/CustomHome.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Custom Home Building Services</h6>
                <span>
                  <Link href="/works3/works3-dark">Custom Home Building Services</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div>
            </div>

            {/*Business done*/}
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand wow fadeInUp`}
              data-wow-delay=".1s"
            >
              <div className="image-container">
                <Link href={`https://psm100au.com/`} className="imago wow" target="blank">
                  <img src="/img/portfolio/portfolio/WorkCategory/Business.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Business</h6>
                <span>
                  <Link href="/works3/works3-dark">Business</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div>
            </div>

            {/*Digital Marketing done*/}
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand wow fadeInUp`}
              data-wow-delay=".1s"
            >
              <div className="image-container">
                <Link href={`https://truefxinfotech.com/`} className="imago wow" target="blank">
                  <img src="/img/portfolio/portfolio/WorkCategory/Dig-Marketing.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Digital Marketing</h6>
                <span>
                  <Link href="/works3/works3-dark">Digital Marketing</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div>
            </div>

            {/*German Hangar done*/}
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand wow fadeInUp`}
              data-wow-delay=".1s"
            >
              <div className="image-container">
                <Link href={`https://germanhangaronrent.com/`} className="imago wow" target="blank">
                  <img src="/img/portfolio/portfolio/WorkCategory/GermanHanger.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>German Hangar</h6>
                <span>
                  <Link href="/works3/works3-dark">German Hangar</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div>
            </div>


            {/*Jewellery Store done*/}
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand wow fadeInUp`}
              data-wow-delay=".1s"
            >
              <div className="image-container">
                <Link href={`https://ethnickapada.com/`} className="imago wow" target="blank">
                  <img src="/img/portfolio/portfolio/WorkCategory/JewelStore.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Jewellery Store</h6>
                <span>
                  <Link href="/works3/works3-dark">Jewellery Store</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div>
            </div>
            
            {/*Medical Services done*/}
            <div 
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand wow fadeInUp`}
              data-wow-delay=".1s"
            >
              <div className="image-container">
                <Link href={`https://shreejilab.in/`} className="imago wow" target="blank">
                  <img src="/img/portfolio/portfolio/WorkCategory/MedServices.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Medical Services</h6>
                <span>
                  <Link href="/works3/works3-dark">Medical Services</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div>
            </div>
            
            {/*Baba Group done*/}
            <div 
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand wow fadeInUp`}
              data-wow-delay=".1s"
            >
              <div className="image-container">
                <Link href={`https://baba-group.com/`} className="imago wow" target="blank">
                  <img src="/img/portfolio/portfolio/WorkCategory/BabaGroup.webp" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Baba Group</h6>
                <span>
                  <Link href="/works3/works3-dark">Baba Group</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle2;
