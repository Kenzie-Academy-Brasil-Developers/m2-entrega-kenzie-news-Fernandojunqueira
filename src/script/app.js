const tagBody = document.querySelector('body')
const divContainer = document.createElement('div')
divContainer.className = 'container'

tagBody.appendChild(createHeader())
tagBody.appendChild(createSectionPrincipal())
tagBody.appendChild(divContainer)
divContainer.appendChild(createSectionMain())
tagBody.appendChild(creteFooter())

function createHeader (){

    const tagHeader = document.createElement('header')
    const imgLogoKenzie = document.createElement('img')

    imgLogoKenzie.src = "./src/assets/Logo.svg"
    imgLogoKenzie.alt = "Logo Kenzie"

    tagHeader.appendChild(imgLogoKenzie)

    return tagHeader
}

function creteFooter(){
    const tagFooter = document.createElement('footer')
    const tagP = document.createElement('p')

    tagP.innerText = "Kenzie News | Todos os Direitos Reservados"
    

    tagFooter.appendChild(tagP)

    return tagFooter
}

function createSectionPrincipal(){

    const tagSection = document.createElement('section')
    tagSection.className = 'principal'
    const ancor     = document.createElement('a')
    

    fetch("https://kenzie-news-api.herokuapp.com/api/news")
    .then(responseObject => responseObject.json())
    .then(news => {
    
      
      ancor.href = news[1].noticia_completa
      ancor.target = '_blank'
    //figure
      const tagFigure = document.createElement("figure")
      const image = document.createElement("img")
      const fonte = document.createElement("figcaption")
      image.src = news[1].imagem
      fonte.innerText = `font: ${news[1].fonte}`
      tagFigure.append(image, fonte)
      
    //main
      const tagMain = document.createElement("main")
      const tagDiv  = document.createElement("div")
      const categoria = document.createElement("span")
      const titulo   = document.createElement("h1")
      const resumo = document.createElement("p")
      const fontMain = document.createElement("h4")

      categoria.innerText = news[1].categoria
      titulo.innerText    = news[1].titulo
      resumo.innerText    = news[1].resumo
      fontMain.innerText  = `font: ${news[1].fonte}`

      tagMain.append(tagDiv,titulo,resumo,fontMain)
      tagDiv.appendChild(categoria)

      //div img
      const tagDivImag = document.createElement("div")
      const tagImgDesktop = document.createElement("img")
      tagDivImag.className = 'img'
      tagImgDesktop.src = news[1].imagem
      tagDivImag.appendChild(tagImgDesktop)
      
      tagSection.append(tagFigure,tagMain,tagDivImag)
      ancor.appendChild(tagSection)
      
    })
    
    return ancor
    

}

function createSectionMain(){
  
    const tagSection = document.createElement('section')
    tagSection.className = 'main'
    

    for ( let i = 0; i < 6; i++){

        fetch("https://kenzie-news-api.herokuapp.com/api/news")
        .then(responseObject => responseObject.json())
        .then(news => {
            
          const ancor     = document.createElement('a')
          ancor.href = news[i].noticia_completa
          ancor.target = '_blank'
        //article
          const tagArticle = document.createElement("article")
        //figure
          const tagFigure = document.createElement("figure")
          const image = document.createElement("img")
          image.src = news[i].imagem
    
          tagFigure.append(image)
          
        //main
          const tagMain = document.createElement("main")
          const categoria = document.createElement("span")
          const titulo   = document.createElement("h2")
          const resumo = document.createElement("p")
          const fontMain = document.createElement("h4")
    
          categoria.innerText = news[i].categoria
          titulo.innerText    = news[i].titulo
          resumo.innerText    = news[i].resumo
          fontMain.innerText  = `font: ${news[i].fonte}`
    
          tagMain.append(categoria,titulo,resumo,fontMain)
          
    
          
          tagArticle.append(tagFigure,tagMain)
          ancor.appendChild(tagArticle)
          tagSection.appendChild(ancor)
          
          
        })
    }

    return tagSection

  
}
