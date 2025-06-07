// 课程数据
const coursesData = {
    1: [
        {
            id: 1,
            title: "一年级语文全套教材",
            description: "包含拼音学习、识字写字、阅读理解等全面内容，配有生动的插图和练习题。",
            price: 89,
            features: ["拼音教学", "识字卡片", "练习册", "音频朗读"],
            icon: "📚"
        },
        {
            id: 2,
            title: "一年级数学启蒙课程",
            description: "从数字认知到简单运算，循序渐进的数学启蒙教育。",
            price: 79,
            features: ["数字认知", "加减法", "图形认识", "思维训练"],
            icon: "🔢"
        },
        {
            id: 3,
            title: "一年级英语入门",
            description: "26个字母学习，简单单词和日常对话，培养英语兴趣。",
            price: 69,
            features: ["字母学习", "单词卡片", "对话练习", "发音指导"],
            icon: "🔤"
        },
        {
            id: 4,
            title: "一年级综合素质课程",
            description: "包含美术、音乐、体育等综合素质培养课程。",
            price: 99,
            features: ["美术启蒙", "音乐欣赏", "体育游戏", "手工制作"],
            icon: "🎨"
        }
    ],
    2: [
        {
            id: 5,
            title: "二年级语文进阶教材",
            description: "在一年级基础上，加强阅读理解和写作能力培养。",
            price: 95,
            features: ["阅读理解", "写作训练", "古诗词", "课外阅读"],
            icon: "📖"
        },
        {
            id: 6,
            title: "二年级数学提高课程",
            description: "乘法口诀、除法概念、几何图形等数学知识学习。",
            price: 85,
            features: ["乘法口诀", "除法入门", "几何图形", "应用题"],
            icon: "➗"
        },
        {
            id: 7,
            title: "二年级英语提升",
            description: "扩大词汇量，学习简单语法，提高听说能力。",
            price: 75,
            features: ["词汇扩展", "语法入门", "听力训练", "口语练习"],
            icon: "🗣️"
        },
        {
            id: 8,
            title: "二年级科学探索",
            description: "培养科学思维，了解自然现象，动手实验。",
            price: 89,
            features: ["自然观察", "简单实验", "科学思维", "动手操作"],
            icon: "🔬"
        }
    ],
    3: [
        {
            id: 9,
            title: "三年级语文精品课程",
            description: "深入学习课文内容，提高阅读和写作水平。",
            price: 105,
            features: ["课文精讲", "阅读技巧", "作文指导", "文学欣赏"],
            icon: "✍️"
        },
        {
            id: 10,
            title: "三年级数学强化训练",
            description: "分数概念、面积计算、数据统计等数学知识。",
            price: 95,
            features: ["分数学习", "面积计算", "数据统计", "逻辑推理"],
            icon: "📊"
        },
        {
            id: 11,
            title: "三年级英语综合课程",
            description: "语法系统学习，阅读写作并重，全面提升英语能力。",
            price: 85,
            features: ["语法系统", "阅读理解", "写作练习", "综合运用"],
            icon: "📝"
        },
        {
            id: 12,
            title: "三年级科学实验课",
            description: "更多动手实验，培养科学探究精神。",
            price: 99,
            features: ["实验操作", "科学探究", "观察记录", "思维训练"],
            icon: "⚗️"
        }
    ],
    4: [
        {
            id: 13,
            title: "四年级语文深度学习",
            description: "文学作品赏析，写作技巧提升，语言文字运用。",
            price: 115,
            features: ["文学赏析", "写作技巧", "语言运用", "思维拓展"],
            icon: "📚"
        },
        {
            id: 14,
            title: "四年级数学思维训练",
            description: "小数、方程、几何等数学概念，培养数学思维。",
            price: 105,
            features: ["小数学习", "方程入门", "几何概念", "思维训练"],
            icon: "🧮"
        },
        {
            id: 15,
            title: "四年级英语提高班",
            description: "复杂语法学习，阅读能力提升，口语表达训练。",
            price: 95,
            features: ["复杂语法", "阅读提升", "口语表达", "文化了解"],
            icon: "🌍"
        },
        {
            id: 16,
            title: "四年级综合实践课",
            description: "跨学科学习，项目式教学，培养综合能力。",
            price: 109,
            features: ["跨学科", "项目学习", "实践操作", "团队合作"],
            icon: "🎯"
        }
    ],
    5: [
        {
            id: 17,
            title: "五年级语文冲刺课程",
            description: "为小升初做准备，全面提升语文综合能力。",
            price: 125,
            features: ["小升初准备", "综合能力", "考试技巧", "文学素养"],
            icon: "🏆"
        },
        {
            id: 18,
            title: "五年级数学精英班",
            description: "高难度数学题型，奥数思维训练，数学竞赛准备。",
            price: 115,
            features: ["高难题型", "奥数思维", "竞赛准备", "逻辑推理"],
            icon: "🥇"
        },
        {
            id: 19,
            title: "五年级英语高级课程",
            description: "接近初中水平的英语学习，全面提升听说读写。",
            price: 105,
            features: ["高级语法", "阅读写作", "听说并重", "考试准备"],
            icon: "🎓"
        },
        {
            id: 20,
            title: "五年级科学探究课",
            description: "深入的科学探究，培养科学素养和创新思维。",
            price: 119,
            features: ["深度探究", "科学素养", "创新思维", "实验设计"],
            icon: "🚀"
        }
    ],
    6: [
        {
            id: 21,
            title: "六年级语文总复习",
            description: "小学语文知识点全面梳理，小升初考试冲刺。",
            price: 135,
            features: ["知识梳理", "考试冲刺", "答题技巧", "模拟测试"],
            icon: "📋"
        },
        {
            id: 22,
            title: "六年级数学冲刺班",
            description: "小学数学重难点突破，为初中数学打基础。",
            price: 125,
            features: ["重难点", "基础巩固", "思维拓展", "衔接初中"],
            icon: "🎯"
        },
        {
            id: 23,
            title: "六年级英语毕业班",
            description: "小学英语总结提升，为初中英语学习做准备。",
            price: 115,
            features: ["总结提升", "语法巩固", "词汇扩展", "初中衔接"],
            icon: "🌟"
        },
        {
            id: 24,
            title: "六年级综合素质提升",
            description: "全面提升综合素质，培养学习能力和思维品质。",
            price: 129,
            features: ["综合素质", "学习能力", "思维品质", "全面发展"],
            icon: "💎"
        }
    ]
};

// 购物车数据
let cart = [];
let currentGrade = 1;

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    showGrade(1);
    updateCartCount();
    
    // 绑定表单提交事件
    document.getElementById('login-form').addEventListener('submit', handleLogin);
    document.getElementById('register-form').addEventListener('submit', handleRegister);
    
    // 绑定汉堡菜单点击事件
    document.querySelector('.hamburger').addEventListener('click', toggleMobileMenu);
});

// 显示指定年级的课程
function showGrade(grade) {
    currentGrade = grade;
    const coursesGrid = document.getElementById('courses-grid');
    const courses = coursesData[grade];
    
    // 更新标签页状态
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-btn')[grade - 1].classList.add('active');
    
    // 生成课程卡片HTML
    coursesGrid.innerHTML = courses.map(course => `
        <div class="course-card">
            <div class="course-image">
                ${course.icon}
            </div>
            <div class="course-content">
                <h3 class="course-title">${course.title}</h3>
                <p class="course-description">${course.description}</p>
                <div class="course-features">
                    ${course.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                </div>
                <div class="course-footer">
                    <span class="course-price">¥${course.price}</span>
                    <button class="add-to-cart" onclick="addToCart(${course.id})">
                        <i class="fas fa-cart-plus"></i> 加入购物车
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// 添加商品到购物车
function addToCart(courseId) {
    // 查找课程信息
    let course = null;
    for (let grade in coursesData) {
        course = coursesData[grade].find(c => c.id === courseId);
        if (course) break;
    }
    
    if (!course) return;
    
    // 检查是否已在购物车中
    const existingItem = cart.find(item => item.id === courseId);
    if (existingItem) {
        showNotification('该课程已在购物车中！', 'warning');
        return;
    }
    
    // 添加到购物车
    cart.push({
        id: course.id,
        title: course.title,
        price: course.price,
        quantity: 1
    });
    
    updateCartCount();
    updateCartDisplay();
    showNotification('已添加到购物车！', 'success');
}

// 从购物车移除商品
function removeFromCart(courseId) {
    cart = cart.filter(item => item.id !== courseId);
    updateCartCount();
    updateCartDisplay();
    showNotification('已从购物车移除！', 'info');
}

// 更新购物车数量显示
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = cart.length;
    cartCount.style.display = cart.length > 0 ? 'flex' : 'none';
}

// 更新购物车显示
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 20px;">购物车为空</p>';
        cartTotal.textContent = '0';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <h4>${item.title}</h4>
                <p>数量: ${item.quantity}</p>
            </div>
            <div style="display: flex; align-items: center;">
                <span class="cart-item-price">¥${item.price}</span>
                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotal.textContent = total;
}

// 切换购物车显示
function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    cartSidebar.classList.toggle('open');
    updateCartDisplay();
}

// 结算
function checkout() {
    if (cart.length === 0) {
        showNotification('购物车为空！', 'warning');
        return;
    }
    
    showCheckout();
}

// 显示确认购买模态框
function showCheckout() {
    const checkoutModal = document.getElementById('checkout-modal');
    const checkoutDetails = document.getElementById('checkout-details');
    const checkoutTotalAmount = document.getElementById('checkout-total-amount');
    
    // 生成购买详情
    checkoutDetails.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <div class="checkout-item-info">
                <h4>${item.title}</h4>
                <p>数量: ${item.quantity}</p>
            </div>
            <span class="checkout-item-price">¥${item.price}</span>
        </div>
    `).join('');
    
    // 计算总金额
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    checkoutTotalAmount.textContent = total;
    
    checkoutModal.style.display = 'block';
}

// 隐藏确认购买模态框
function hideCheckout() {
    document.getElementById('checkout-modal').style.display = 'none';
}

// 确认购买
function confirmPurchase() {
    // 模拟支付过程
    hideCheckout();
    showNotification('正在处理支付...', 'info');
    
    setTimeout(() => {
        cart = [];
        updateCartCount();
        updateCartDisplay();
        toggleCart();
        showNotification('支付成功！感谢您的购买！', 'success');
    }, 2000);
}

// 显示/隐藏登录模态框
function showLogin() {
    document.getElementById('login-modal').style.display = 'block';
    document.getElementById('register-modal').style.display = 'none';
}

function hideLogin() {
    document.getElementById('login-modal').style.display = 'none';
}

// 显示/隐藏注册模态框
function showRegister() {
    document.getElementById('register-modal').style.display = 'block';
    document.getElementById('login-modal').style.display = 'none';
}

function hideRegister() {
    document.getElementById('register-modal').style.display = 'none';
}

// 处理登录
function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // 模拟登录验证
    if (username && password) {
        showNotification('登录成功！', 'success');
        hideLogin();
        document.querySelector('.login-btn').textContent = username;
        document.querySelector('.login-btn').onclick = logout;
    } else {
        showNotification('请填写完整信息！', 'warning');
    }
}

// 处理注册
function handleRegister(e) {
    e.preventDefault();
    const username = document.getElementById('reg-username').value;
    const phone = document.getElementById('reg-phone').value;
    const password = document.getElementById('reg-password').value;
    const confirm = document.getElementById('reg-confirm').value;
    
    if (!username || !phone || !password || !confirm) {
        showNotification('请填写完整信息！', 'warning');
        return;
    }
    
    if (password !== confirm) {
        showNotification('两次密码输入不一致！', 'warning');
        return;
    }
    
    // 模拟注册
    showNotification('注册成功！请登录', 'success');
    hideRegister();
    showLogin();
}

// 退出登录
function logout() {
    document.querySelector('.login-btn').textContent = '登录';
    document.querySelector('.login-btn').onclick = showLogin;
    showNotification('已退出登录', 'info');
}

// 显示通知
function showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${getNotificationIcon(type)}"></i>
        <span>${message}</span>
    `;
    
    // 添加样式
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1003;
        display: flex;
        align-items: center;
        gap: 10px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // 3秒后自动移除
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        warning: 'exclamation-triangle',
        error: 'times-circle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

function getNotificationColor(type) {
    const colors = {
        success: '#28a745',
        warning: '#ffc107',
        error: '#dc3545',
        info: '#17a2b8'
    };
    return colors[type] || '#17a2b8';
}

// 滚动到指定部分
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// 切换移动端菜单
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// 点击模态框外部关闭
window.onclick = function(event) {
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const checkoutModal = document.getElementById('checkout-modal');
    
    if (event.target === loginModal) {
        hideLogin();
    }
    if (event.target === registerModal) {
        hideRegister();
    }
    if (event.target === checkoutModal) {
        hideCheckout();
    }
}

// 添加通知动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @media (max-width: 768px) {
        .nav-menu.active {
            display: flex;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            flex-direction: column;
            padding: 20px 0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .nav-menu.active li {
            margin: 10px 0;
        }
        
        .dropdown-content {
            position: static;
            display: block;
            background: rgba(255,255,255,0.1);
            box-shadow: none;
            margin-top: 10px;
        }
        
        .notification {
            right: 10px !important;
            left: 10px !important;
            right: auto !important;
        }
    }
`;
document.head.appendChild(style);