let theInput=document.querySelector('.get-repos input');
let getBtn=document.querySelector('.get-button');
let reposData=document.querySelector('.data-show');


window.onload=function(){
    theInput.focus()
}

getBtn.onclick=function(){
    getRepos()
}
// get repos function
function getRepos(){

// check if input is empty
    if(theInput.value==''){
        reposData.innerHTML=`<span>Please write Githup userName</span>`
    }else{

        fetch(`https://api.github.com/users/${theInput.value}/repos`)
        .then((reponse)=>{ return reponse.json()})
        .then((reposatry) => {
            reposData.innerHTML=''
       reposatry.forEach(repo => {
        
        let mainDiv=document.createElement('div')
        let repoName=document.createTextNode(repo.name)
        mainDiv.appendChild(repoName)

let repoUrl=document.createElement('a')

let text=document.createTextNode('visit')
repoUrl.href=`https://github.com/${theInput.value}/${repo.name}`
repoUrl.appendChild(text)
repoUrl.setAttribute(`target`,'_blank')
mainDiv.appendChild(repoUrl)

let starspan=document.createElement('span')
let starText=document.createTextNode(`star ${repo.stargazers_count}`)
starspan.appendChild(starText)
mainDiv.appendChild(starspan)
mainDiv.className='repo-box'
 reposData.appendChild(mainDiv)



       })

       })
        

    }
}