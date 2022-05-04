$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper25');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/req.png',
            link: 'assets/files/Req1.pdf',
            title: 'Requirements',
            categories: ['featured']
        },
        {
            image: 'assets/images/arc.png',
            link: 'assets/files/Arch1.pdf',
            title: 'Architecture',
            categories: ['featured']
        },
        {
            image: 'assets/images/msp.png',
            link: 'assets/files/Plan1.pdf',
            title: 'Method selection and planning',
            categories: ['featured']
        },
        {
            image: 'assets/images/ram.png',
            link: 'assets/files/Risk1.pdf',
            title: 'Risk assessment and mitigation',
            categories: ['featured']
        },
        {
            image: 'assets/images/imp.png',
            link: 'assets/files/Impl1.pdf',
            title: 'Implementation',
            categories: ['featured']
        },
  
    ]



    let projects_area2 = $('.projects-wrapper18');

    //TODO add images and files
    let projects_obj2 = [
            {
                image: 'assets/images/req.png',
                link: 'assets/files/Req1.pdf',
                title: 'Requirements:TODO',
                categories: ['featured']
            },
            {
                image: 'assets/images/arc.png',
                link: 'assets/files/Arch1.pdf',
                title: 'Architecture:TODO',
                categories: ['featured']
            },
            {
                image: 'assets/images/msp.png',
                link: 'assets/files/Plan1.pdf',
                title: 'Method selection and planning:TODO',
                categories: ['featured']
            },
            {
                image: 'assets/images/ram.png',
                link: 'assets/files/Risk1.pdf',
                title: 'Risk assessment and mitigation: TODO',
                categories: ['featured']
            },
            {
                image: 'assets/images/imp.png',
                link: 'assets/files/Impl1.pdf',
                title: 'Implementation: TODO',
                categories: ['featured']
            },
            {
                categories: ['featured']
            },
            {
                title: 'Team 18 deliverables:',
                categories: ['featured']
            },
            {
                categories: ['featured']
            },
            {
                image: 'assets/images/change report.PNG',
                link: 'assets/files/Impl1.pdf',
                title: 'Change Report',
                categories: ['featured']
            },
            {
                image: 'assets/images/Implementation.PNG',
                link: 'assets/files/Impl1.pdf',
                title: 'Implementation',
                categories: ['featured']
            },
            {
                image: 'assets/images/Software Testing report.PNG',
                link: 'assets/files/Impl1.pdf',
                title: 'Software Testing Report',
                categories: ['featured']
            },
            {
                image: 'assets/images/CI report.PNG',
                link: 'assets/files/CI.pdf',
                title: 'Continuous Integration Report',
                categories: ['featured']
            },

        ]

        let projects = [];
        let projects2 = [];
        if(slug == 'all') {
            projects = projects_obj.map(project_mapper);
            projects2 = projects_obj2.map(project_mapper);
        }
        else {
            projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
            projects2 = projects_obj2.filter(project => project.categories.includes(slug)).map(project_mapper);
        }
        projects_area.hide().html(projects).fadeIn();
        projects_area2.hide().html(projects2).fadeIn();

}

let project_mapper = project => {
    if (project.image == undefined){
        if (project.title == undefined){
            return `<div> </div>`
        }else{
            return`<h1> Team 18 Deliverables: </h1>`
        }
        
    }else{
        return `
            <div class="wrapper">

                <div class="card radius shadowDepth1">

                    ${project.image ? 
                        `<div class="card__image border-tlr-radius">
                            <a href="${project.link}">
                                <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                            </a>
                        </div>`           
                    : ''}

            
                    <div class="card__content card__padding">
            
                        <article class="card__article">
                            <h2><a href="${project.link}">${project.title}</a></h2>
                                </article>
                    </div>
                </div>
            </div>
        `
    }
}

let selected = (slug) => {
    render_projects(slug);
}
