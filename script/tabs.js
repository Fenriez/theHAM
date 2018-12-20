const review_data = [
    {
        name: 'web design',
        image: './images/section-content/service/img-web_design.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus facilis natus, nihil mollitia nobis fugit fugiat.Eum commodi dolorem, laudantium debitis quod aperiam distinctio neque voluptate veritatis dolor consequatur nulla. Maiores dolorum similique quam vel officia explicabo aspernatur fugiat corrupti molestias, beatae eaque praesentium id omnis eos aliquam voluptas natus adipisci, cum quos delectus magnam ipsam quisquam minima quia? Mollitia. Cumque atque, quia natus expedita officiis quae corporis dignissimos incidunt porro minus eum voluptatum sapiente suscipit, nisi animi ad, unde vero? Tempore ipsam mollitia harum at vero doloribus eius.Beatae! Nam cupiditate ab hic ipsum accusamus, modi fuga incidunt magnam autem minima numquam quisquam maiores voluptate molestias.Aliquid itaque ad sapiente.Ipsum quae nihil autem nobis, eveniet error sapiente quos.'
    },
    {
        name: 'graphic design',
        image: './images/section-content/portfolio/graphic_design/graphic-design1.jpg',
        text: 'Draw fond rank form nor the day eat. You high bed wish help call draw side. Words to up style of since world. Latter remark hunted enough vulgar say man. Steepest speaking up attended it as. Took sold add play may none him few. As so seeing latter he should thirty whence. Detract yet delight written farther his general. At princi'
    },
    {
        name: 'online support',
        image: './images/section-content/service/img-online_support.jpg',
        text: 'Latter remark hunted enough vulgar say man. Decisively advantages nor expression unpleasing she led met. Words to up style of since world. Sportsman do offending supported extremity breakfast by listening. Their saved linen downs tears son add music. Expression alteration entreaties mrs can terminated estimating. Their saved linen downs tears son add mu'
    },
    {
        name: 'app design',
        image: './images/graphic design/graphic-design6.jpg',
        text: 'Polite do object at passed it is. To things so denied admire. Expression alteration entreaties mrs can terminated estimating. He felicity no an at packages answered opinions juvenile. At principle perfectly by sweetness do. You high bed wish help call draw side. Dissimilar admiration so terminated no in contrasted it. Bed uncommonly his discovered f'
    },
    {
        name: 'online marketing',
        image: './images/graphic design/graphic-design6.jpg',
        text: 'Sportsman do offending supported extremity breakfast by listening. At principle perfectly by sweetness do. Agreeable promotion eagerness as we resources household to distrusts. How one dull get busy dare far. We leaf to snug on no need. Strictly numerous outlived kindness whatever on we no on addition. Steepest speaking up attend'
    },
    {
        name: 'seo service',
        image: './images/graphic design/graphic-design6.jpg',
        text: 'He felicity no an at packages answered opinions juvenile. Polite do object at passed it is. Now summer who day looked our behind moment coming. Took sold add play may none him few. Expression alteration entreaties mrs can terminated estimating. Do play they miss give so up. Estate was tended ten boy nearer seemed. Secure shy favour length all twenty denote. Effect if in up no de'
    }
];

$(".review_block__nav > .nav__btn").on("click", function () {
    $(".review_block__nav > .nav__btn").removeClass("nav__btn-active");
    $(this).addClass("nav__btn-active");
    
    let tab_name = $(this).text();
    let tab_data = $.grep(review_data, function (elem, index) {
        if (elem.name == tab_name) {
            return elem;
        }
    });

    $('.service_image').attr('src', tab_data[0].image);
    $('.service_description').text(tab_data[0].text);
});