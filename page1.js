const article = {
  'article-title': 'When',
  'article-content': 'Crocs were invented in 2002 and introduced to the public in 2002 at the Fort Lauderdale Boat Show.',
  'article-title-2': 'Why',
  'article-content-2': 'Crocs were created to be a comfortable, waterproof shoe suitable for boating and outdoor activities. They were designed with special features like their signature Croslite foam material for cushioning and durability.',
  'article-title-3': 'Who',
  'article-content-3': 'Crocs were invented by three individuals: Scott Seamans, Lyndon "Duke" Hanson, and George Boedecker. They initially started a company called "Foam Creations" and developed the iconic Crocs shoe based on a foam clog design they had acquired from a Canadian company.',
  'article-title-4': 'Source of Manufacturer',
  'article-content-4': 'Crocs are manufactured in various locations around the world. The company has factories in different countries, and they use a combination of their own manufacturing facilities and third-party manufacturers. Some of the countries where Crocs are known to be manufactured include the United States, Mexico, China, Vietnam, and Italy. The specific source of manufacturing can vary depending on the model and production requirements.'
};

// 遍历article对象的属性并填充相应的HTML元素
for (let key in article) {
  const element = document.querySelector(`.${key}`);
  if (element) {
    element.textContent = article[key];
  }
}

// 选择所有标题元素，并分别为它们添加点击事件处理程序
const titles = document.querySelectorAll('.article-title, .article-title-2, .article-title-3, .article-title-4');

titles.forEach(title => {
    title.addEventListener('click', function() {
        // 查找关联的内容元素
        const content = this.nextElementSibling;

        // 切换内容的可见性
        if (content.style.display === 'none') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});


// 选择所有标题元素
const title = document.querySelectorAll('.article-title, .article-title-2, .article-title-3, .article-title-4');

title.forEach(title => {
    title.addEventListener('mouseenter', function() {
        // 在鼠标进入标题时显示 "click"
        this.textContent = 'click';
    });

    title.addEventListener('mouseleave', function() {
        // 在鼠标离开标题时还原标题文本
        this.textContent = this.getAttribute('data-original-text');
    });
});

// 在加载页面时保存原始标题文本
title.forEach(title => {
    title.setAttribute('data-original-text', title.textContent);
});
