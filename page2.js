const textData = {
    materialsText: `
        <span class="black" style="font-weight: bold;">Classic Croslite Foam:</span> The original Crocs are primarily made of Croslite foam for the upper and sole, known for its comfort and durability.<br>
        <span class="black" style="font-weight: bold;">Textile Uppers:</span>  Some Crocs feature textile uppers, adding breathability and style to the shoes.<br>
        <span class="black" style="font-weight: bold;">Fleece-Lined:</span> Crocs with fleece lining are designed for warmth and comfort in colder weather.<br>
        <span class="black" style="font-weight: bold;">Leather:</span> Crocs offer leather versions for a more refined, classic look.<br>
        <span class="black" style="font-weight: bold;">Mesh:</span> Mesh materials are used in some styles for breathability and water drainage.<br>
        <span class="black" style="font-weight: bold;">Rubber:</span> Some specialized Crocs are designed for work or outdoor use, made with durable rubber.<br>
        <span class="black" style="font-weight: bold;">Sustainable Materials:</span> Crocs have introduced styles made from recycled plastic materials, promoting sustainability.
    `,
    productionText: `
        <span class="black" style="font-weight: bold;">Raw Material Preparation</span> <br>
        Croslite is produced from a thermoplastic material. The raw material is prepared, including coloring if needed.
        <br><br>
        <span class="black" style="font-weight: bold;">Injection Molding</span> <br>
        The Croslite material is heated and injected into molds to form the shape of the shoe. Different molds are used to create various styles and sizes.
        <br><br>
        <span class="black" style="font-weight: bold;">Cooling and Setting</span> <br>
        The molded shoe components are cooled and set to solidify the material.
        <br><br>
        <span class="black" style="font-weight: bold;"> Assembly</span> <br>
        Straps, buckles, and any other components are attached to the molded shoe bodies as needed.
        <br><br>
        <span class="black" style="font-weight: bold;">Quality Control</span> <br>
        Each pair of Crocs goes through a quality control process to ensure they meet the company's standards for comfort, durability, and appearance.
        <br><br>
        <span class="black" style="font-weight: bold;">Packaging</span> <br>
        After quality control, the shoes are packaged and prepared for distribution.
    `
};

// 获取标题和内容元素
const titles = document.querySelectorAll('.article-title');
const contents = document.querySelectorAll('.article-content');

// 填充文本内容
document.getElementById('materialsText').innerHTML = textData.materialsText;
document.getElementById('productionText').innerHTML = textData.productionText;

// 添加点击事件监听器
titles.forEach((title, index) => {
    title.addEventListener('click', function() {
        // 切换内容的可见性
        if (contents[index].style.display === 'none' || contents[index].style.display === '') {
            contents[index].style.display = 'block';
        } else {
            contents[index].style.display = 'none';
        }
    });

    // 添加鼠标悬停效果
    title.addEventListener('mouseenter', function() {
        this.textContent = 'click';
    });

    title.addEventListener('mouseleave', function() {
        this.textContent = 'Materials Used in Crocs'; // 这里使用标题的原始文本
    });
});

