
import { Grid } from "@mui/material";
import { FC, useEffect, useRef, useState } from "react";
import { ArrowImage, ContactImage } from "src/Assets/Images/Contact/contact-image";




const InputField: FC<{
    content: string;
    width: string;
    height: string;
    marginLeft: string;
}> = ({content,width,height,marginLeft}) => (
    <input style={{ width:width  , marginLeft: marginLeft , boxSizing: "border-box"  , height: height}} size={40}  placeholder={content}></input>
);
const Btn: FC<{
    content: string;
    width: string;
    height: string;
    marginLeft: string;
    color: string;
}> = ({content,width,height,marginLeft,color}) => (
    <button style={{borderRadius:"9%", border:"none" , width:width , backgroundColor:color , marginLeft: marginLeft , boxSizing: "border-box"  , height: height}} >{content}</button>
);
export const Contact = () => {
    const headerRef = useRef<HTMLElement>();
    const [showSearchCountries, setShowSearchCountries] = useState(false);
    useEffect(() => {
        document.addEventListener("scroll", (e) => {
          const { scrollY } = window;
          if (
            headerRef.current?.clientHeight &&
            scrollY >= headerRef.current?.clientHeight
          ) {
            setShowSearchCountries(true);
          } else {
            setShowSearchCountries(false);
          }
        });
      }, []);
    console.log("ABC")
    return (
        <div>
            <div style={{backgroundColor:"black"}}>
                <Grid container columns={5} justifyContent="center" marginTop="2rem">
                <Grid 
          item
          lg={2}
          md={3}
          sx={{ backgroundColor: "black", marginTop: "4rem" }}
        >
            
           <InputField marginLeft="10%" width="80%" height="2rem" content="Your Name"/>
                <br></br>
                <br></br>
                <InputField marginLeft="10%" width="80%" height="2rem" content="Email"/>
                <br></br>
                <br></br>
                <InputField marginLeft="10%" width="80%" height="2rem" content="Phone"/>
                <br></br>
                <br></br>
                <InputField marginLeft="10%" width="80%" height="9rem" content="Massage"/>
        </Grid>
        <Grid
          item
          lg={2}
          md={3}
          sx={{ backgroundColor: "green", marginTop: "4rem" }}
        >
            
         <div >
            <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width="600" height="450"  style={{border:"0" , width: "100%"}} ></iframe>
        </div> 
        </Grid>
            </Grid>
        </div>
        <div style={{backgroundColor:"grey"}}>
        <Grid container columns={9} justifyContent="center">
            <Grid
            item
            lg={2}
            md={3}
            sx={{ backgroundColor: "grey", marginTop: "4rem" }}
            >
                
            <ContactImage></ContactImage>
            <br></br>
            dolor sit amet, consectetur
            <br></br>
            adipiscing elit, sed do eiusmod
            <br></br>
            tempor incididunt ut labore et sdolor
            <br></br>
            sit amet,
            </Grid>
            <Grid
            item
            lg={2}
            md={3}
            sx={{ backgroundColor: "grey", marginTop: "4rem" }}
            >
                
            <h1 className="quick_text">Quick links</h1>
            <div style={{marginTop:"5%"}}>
                <ArrowImage></ArrowImage><span>Join Us</span>
            </div>
            <div style={{marginTop:"3%"}}>
                <ArrowImage></ArrowImage><span>Maintenance</span>
            </div>
            <div style={{marginTop:"3%"}}>
                <ArrowImage></ArrowImage><span>Language Packs</span>
            </div>
            <div style={{marginTop:"3%"}}>
                <ArrowImage></ArrowImage><span>Release Status</span>
            </div>
            </Grid>
            <Grid
            item
            lg={2}
            md={3}
            sx={{ backgroundColor: "grey", marginTop: "4rem" }}
            >
                
            <h1 className="quick_text">Subcribe email</h1>
            <div style={{marginTop:"5%"}}>
                Lorem ipsum dolor sit amet,
                <br></br>
                consectetur adipiscing elit,
            </div>
            <div style={{marginTop:"3%"}}>
                <InputField marginLeft="0%" content="Your Email" height="5rem" width="10rem"></InputField>
            </div>
            <div style={{marginTop:"3%"}}>
            <Btn color="green" marginLeft="0%" content="Submit" height="3rem" width="8rem"></Btn>
            </div>
            
            </Grid>
        </Grid>
        </div>  
    </div>
    )
}


