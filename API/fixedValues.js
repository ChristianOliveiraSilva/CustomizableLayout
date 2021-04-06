

module.exports = function(img, fields) {
    
    console.log(fields);

    let PortfolioGallery = {}
    let SlideshowGallery = {}
    let Testimonials = {}

    if (!Number.isNaN(fields.key)) {
        let arr = [].fill({}, 0, Number.parseInt(fields.key)-1)
        arr[Number.parseInt(fields.key)] = {img: img}
        img = arr

        const content = {content: img}
        PortfolioGallery = [content, null, null, null]
        SlideshowGallery = [null, content, null, null]
        Testimonials = [null, null, null, content]
    }

    const valuesToUpload = {
        logo: {config: {logo: img}},
        aboveTheFold: {components: {aboveTheFold: {component: {slideshow: {lead: img}}}}},
        PortfolioGallery: {components: {mainContent: {components: PortfolioGallery}}},
        SlideshowGallery: {components: {mainContent: {components: SlideshowGallery}}},
        Testimonials: {components: {mainContent: {components: Testimonials}}}
    }

    return valuesToUpload[fields.component]
}
