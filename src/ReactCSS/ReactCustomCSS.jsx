import React from "react";
import './ReactCustomCSS.css'

const ReactCustomCSS = () => {
    const navStyle = {
        // backgroundColor: 'pink',
        marginRight:'40%',
        marginLeft:'40%',
        padding:5,
        borderRadius:40,
        position:'absolute',
        left:"40%",
        top:"10%",
    }
    return (
        <>
        <header style={{
            position:'relative',
            backgroundColor:'black',
            margin:20,
            padding:5,
            textAlign:'center',
            borderRadius:40,
            height:70,
            top:10
        }}>
            <h1 style={{
                color: 'yellow',
                fontFamily: 'cursive',
                textShadow: '2px 1px cyan',
                position: 'absolute',
                left:0,
                top:0,
                right:"60%"
            }}>Example of React Custom CSS</h1>
        </header>
        <nav style={navStyle}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>
        <fieldset>
            <legend className="headerStyle" >REACT DESIGN</legend>
            <section>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores a inventore aperiam accusantium dolorem molestiae neque consequuntur ad molestias. Similique placeat cupiditate alias ipsa inventore at, veniam dicta assumenda distinctio?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officiis, porro iusto nihil at sed. Reiciendis asperiores nemo ad beatae, odio quo eveniet error, corporis, itaque officia suscipit eos labore?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consectetur animi molestiae perspiciatis eligendi necessitatibus ipsa repellendus tenetur quibusdam magni, nesciunt sit reprehenderit velit harum. Rem distinctio quos consectetur totam!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut reiciendis, laboriosam, dolores deleniti saepe beatae itaque at a aperiam numquam placeat consectetur nihil aspernatur ab esse fugiat inventore natus reprehenderit.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, error illum, optio impedit ad magni soluta officia porro enim eaque hic cumque, sapiente voluptates qui reprehenderit nulla odit. Molestias, numquam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis obcaecati quisquam ipsum molestias, eaque, veniam voluptatibus odio nam, saepe dolore tempora facilis quaerat magni accusantium expedita blanditiis debitis ipsam mollitia!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, rem. Eligendi ipsam pariatur, cum dolorem ullam exercitationem fuga rem vel iusto odit illum distinctio, tenetur saepe. Similique nostrum vel unde.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio iure animi? Deleniti nesciunt ipsum dolorum dicta ducimus id deserunt ex blanditiis magni sit laboriosam, nobis magnam. Veritatis, blanditiis suscipit!
            </section>
        </fieldset>
        <footer>
            <em>Copyright &copy;Ejob2023</em>
        </footer>
        </>
    )
}

export default ReactCustomCSS;