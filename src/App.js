import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import scriptLoader from "react-async-script-loader";
import "./App.css";
import Navbar from "./Navbar";

function App({ isScriptLoaded, isScriptLoadSucceed }) {
  const [address, setAddress] = React.useState("");

  const handleChange = (value) => {
    setAddress(value)
  }

  const handleSelect = (value) => {
    setAddress(value)
  }

  if (isScriptLoaded && isScriptLoadSucceed) {
    return (

      <div>
    <div className = "box1">

      <div className = "header1" >
        <div className = "icon"><i className="fas fa-home"></i></div>
        <div className = "textBlock">Remote Roofing</div>
        <div className = "align"><i class="fas fa-phone"></i></div>
        <div className = "number"><p>123-4567-891</p></div>
        <br className = "style"></br> 
        
      </div>
      
      <div className = "navSection" ><Navbar /></div> 
      <div className = "header2">
       <h1>Roof Inspection made remote and easy</h1>
       <p>Get your roof inspected remotely and connect with our trusted roofers.</p>

       <div className = "input">

        <div className = "align"><i class="fas fa-map-marker-alt mapIcon"></i></div>
        <div >
        <PlacesAutocomplete
        
          value={address}
          onChange={handleChange}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div   >
              <input
               
                {...getInputProps({
                  placeholder: "Enter Address...",
                })}
              />
              <div className = "suggestionBox" style = {{marginTop: "0.9rem"}}>
                {loading && <div    className = "box">Loading...</div>}
                {suggestions.map((suggestion) => {
                  const style = suggestion.active
                    ? { border:"2px solid black", cursor: "pointer",
                    width: "350px",whiteSpace: "nowrap",
                    overflow: "hidden", textOverflow: "ellipsis", zIndex:"1", color: "black" 
                    }
                    : { backgroundColor: "white",cursor: "pointer",
                    width: "200px",whiteSpace: "nowrap",
                    overflow: "hidden", textOverflow: "ellipsis", zIndex:"1", color: "black"
                     };

                  return (
                    
                    <div  {...getSuggestionItemProps(suggestion, { style })}>
                    <div   className = "align1"><i class="fas fa-map-marker-alt place"></i></div>
                      {suggestion.description}
                      
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        
        </PlacesAutocomplete>
        
        </div>

        
       </div>
       <div className = "inspection"><button>Get Inspection</button></div>
       <br className = "style"></br>
     
      </div>
      <div className = "box2"></div>

      <div id = "about" className = "header3" >

       <div className = "main-section">

        <div className = "section1">
         <div className = "align"><i class="fas fa-lightbulb"></i></div>
         <div className = "block2"><p>Free Inspection</p></div>
        </div>

        <div className = "section2">
         <div className = "align"><i class="fas fa-paste"></i></div>
         <div className = "block3"><p>File a claim</p></div>
        </div>

        <div className = "section3">
         <div className = "align"><i class="fas fa-tools"></i></div>
         <div className = "block4"><p>Replace or Repair a roof</p></div>   
        </div>

       </div>
       <br className = "style"></br>
       </div>
      </div>
    </div>






     
    );
  } else {
    return <div></div>;
  }
}

export default scriptLoader([
  `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API}&libraries=places`,
])(App);