import React from "react";
import "./LeftContainer.css";
import { Down1 } from "../../icons/Down1";

export function LeftContainer() {
  return (
    <div className="left_container">
      <div className="header_section">
        <div className="title_section">
          <div className="get-in-touch-button">
            <div className="button-wrapper">
              <div className="button-text">
                <div className="button-wrapper-2">
                  <div className="button-text-2">Get in Touch</div>
                </div>
              </div>
            </div>
            <div className="description-section">
              <div className="group-10">
                <button className="description ">
                  <div className="button_internal">Explore More</div>
                </button>
              </div>
            </div>
          </div>
          <div className="description-section-2">
            <p className="p_section">
              Your Ultimate Travel Itinerary Crafting Companion! Build your Next
              Vacation with AI. Explore More, Plan Less.
            </p>
            <div className="sub-description">
              <p className="sub-description-sectiion">
                Tailoring Travel <br></br> Adventures Just for You!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="descriptions_wrapper">
        <div className="descriptions_section">
          <div className="descriptions_section_europe">
            <div className="text-wrapper-10">Europe</div>
            <div className="destination-image">
              <div className="destination-image-section">
                <div className="overlap-group-4">
                  <div className="ellipse-wrapper">
                    <div className="ellipse" />
                  </div>
                  <img
                    className="destination-icon"
                    alt="Group"
                    src="https://c.animaapp.com/SHnkkd1L/img/group-6543@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="destination_delhi">
            <div className="text-wrapper-11">Delhi</div>
            <div className="destination-title">
              <div className="destination-image">
                <div className="ellipse-wrapper">
                  <div className="ellipse-2" />
                </div>
                <img
                  className="destination-icon-2"
                  alt="Group"
                  src="https://c.animaapp.com/SHnkkd1L/img/group-6543-1@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="down-wrapper">
            <Down1 className="down-1" />
          </div>
        </div>
        <div className="group-24">
          <p className="text-wrapper-12">
            Create a new standard of personalized travel experiences.
          </p>
          <div className="text-wrapper-13">Explore Dream Destinations</div>
        </div>
      </div>
    </div>
  );
}
