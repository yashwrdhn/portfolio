const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')

about.addEventListener('click',() => {
    const aboutBox = new WinBox({
        title:'about me',
        background: '#00aa00',
        width:'500px',
        height:'500px',
        top:50,
        right:50,
        bottom:50,
        left:50,
        mount: aboutContent, 
        onfocus: function(){
            this.setBackground('#00aa00')
        }, 
        onblur: function(){
            this.setBackground('#777')
        }   
    })
})

contact.addEventListener('click',() => {
    const contactbox = new WinBox({
        title:'contact me',
        background: '#00aa00',
        width:'500px',
        height:'500px',
        top:150,
        right:50,
        bottom:50,
        left:250,
        mount: contactContent,   
        onfocus: function(){
            this.setBackground('#00aa00')
        }, 
        onblur: function(){
            this.setBackground('#777')
        }
    })
})