// 管理后台JavaScript

// 模拟数据
let coursesData = [
    { id: 1, title: "一年级语文全套教材", grade: 1, price: 89, status: "active", icon: "📚" },
    { id: 2, title: "一年级数学启蒙课程", grade: 1, price: 79, status: "active", icon: "🔢" },
    { id: 3, title: "二年级语文进阶教材", grade: 2, price: 95, status: "active", icon: "📖" },
    { id: 4, title: "二年级数学提高课程", grade: 2, price: 85, status: "active", icon: "➗" },
    { id: 5, title: "三年级语文精品课程", grade: 3, price: 105, status: "active", icon: "✍️" },
    { id: 6, title: "三年级数学强化训练", grade: 3, price: 95, status: "active", icon: "📊" }
];

let ordersData = [
    { id: "ORD001", user: "张同学", course: "一年级语文全套教材", amount: 89, status: "paid", time: "2024-06-07 10:30" },
    { id: "ORD002", user: "李同学", course: "二年级数学提高课程", amount: 85, status: "pending", time: "2024-06-07 11:15" },
    { id: "ORD003", user: "王同学", course: "三年级语文精品课程", amount: 105, status: "paid", time: "2024-06-07 12:00" },
    { id: "ORD004", user: "赵同学", course: "一年级数学启蒙课程", amount: 79, status: "cancelled", time: "2024-06-07 13:45" },
    { id: "ORD005", user: "刘同学", course: "二年级语文进阶教材", amount: 95, status: "paid", time: "2024-06-07 14:20" }
];

let usersData = [
    { id: 1, username: "张同学", phone: "138****1234", registerTime: "2024-05-15", status: "active" },
    { id: 2, username: "李同学", phone: "139****5678", registerTime: "2024-05-20", status: "active" },
    { id: 3, username: "王同学", phone: "136****9012", registerTime: "2024-05-25", status: "active" },
    { id: 4, username: "赵同学", phone: "137****3456", registerTime: "2024-06-01", status: "inactive" },
    { id: 5, username: "刘同学", phone: "135****7890", registerTime: "2024-06-05", status: "active" }
];

// 当前登录状态
let isLoggedIn = false;

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 绑定登录表单
    document.getElementById('admin-login-form').addEventListener('submit', handleAdminLogin);
    
    // 绑定添加课程表单
    document.getElementById('add-course-form').addEventListener('submit', handleAddCourse);
    
    // 绑定侧边栏切换
    document.querySelector('.sidebar-toggle').addEventListener('click', toggleSidebar);
    
    // 初始化数据表格
    updateCoursesTable();
    updateOrdersTable();
    updateUsersTable();
});

// 处理管理员登录
function handleAdminLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;
    
    // 简单的登录验证（实际项目中应该调用后端API）
    if (username === 'admin' && password === '123456') {
        isLoggedIn = true;
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('admin-dashboard').style.display = 'flex';
        showNotification('登录成功！', 'success');
    } else {
        showNotification('用户名或密码错误！', 'error');
    }
}

// 退出登录
function logout() {
    isLoggedIn = false;
    document.getElementById('login-page').style.display = 'flex';
    document.getElementById('admin-dashboard').style.display = 'none';
    document.getElementById('admin-login-form').reset();
    showNotification('已退出登录', 'info');
}

// 显示指定部分
function showSection(sectionName) {
    // 隐藏所有部分
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // 显示指定部分
    document.getElementById(sectionName + '-section').classList.add('active');
    
    // 更新导航状态
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    event.target.closest('.nav-item').classList.add('active');
    
    // 更新页面标题
    const titles = {
        'dashboard': '仪表盘',
        'courses': '课程管理',
        'orders': '订单管理',
        'users': '用户管理',
        'statistics': '数据统计',
        'settings': '系统设置'
    };
    
    document.getElementById('page-title').textContent = titles[sectionName];
}

// 切换侧边栏（移动端）
function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('open');
}

// 更新课程表格
function updateCoursesTable() {
    const tbody = document.getElementById('courses-table-body');
    tbody.innerHTML = coursesData.map(course => `
        <tr>
            <td>${course.id}</td>
            <td>${course.title}</td>
            <td>${course.grade}年级</td>
            <td>¥${course.price}</td>
            <td>
                <span class="order-status ${course.status === 'active' ? 'paid' : 'pending'}">
                    ${course.status === 'active' ? '启用' : '禁用'}
                </span>
            </td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="editCourse(${course.id})">
                    <i class="fas fa-edit"></i> 编辑
                </button>
                <button class="btn btn-sm btn-danger" onclick="deleteCourse(${course.id})">
                    <i class="fas fa-trash"></i> 删除
                </button>
            </td>
        </tr>
    `).join('');
}

// 更新订单表格
function updateOrdersTable() {
    const tbody = document.getElementById('orders-table-body');
    tbody.innerHTML = ordersData.map(order => `
        <tr>
            <td>${order.id}</td>
            <td>${order.user}</td>
            <td>${order.course}</td>
            <td>¥${order.amount}</td>
            <td>
                <span class="order-status ${order.status}">
                    ${getStatusText(order.status)}
                </span>
            </td>
            <td>${order.time}</td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="viewOrder('${order.id}')">
                    <i class="fas fa-eye"></i> 查看
                </button>
                ${order.status === 'pending' ? 
                    `<button class="btn btn-sm btn-success" onclick="confirmOrder('${order.id}')">
                        <i class="fas fa-check"></i> 确认
                    </button>` : ''
                }
            </td>
        </tr>
    `).join('');
}

// 更新用户表格
function updateUsersTable() {
    const tbody = document.getElementById('users-table-body');
    tbody.innerHTML = usersData.map(user => `
        <tr>
            <td>${user.id}</td>
            <td>${user.username}</td>
            <td>${user.phone}</td>
            <td>${user.registerTime}</td>
            <td>
                <span class="order-status ${user.status === 'active' ? 'paid' : 'pending'}">
                    ${user.status === 'active' ? '正常' : '禁用'}
                </span>
            </td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="editUser(${user.id})">
                    <i class="fas fa-edit"></i> 编辑
                </button>
                <button class="btn btn-sm ${user.status === 'active' ? 'btn-danger' : 'btn-success'}" 
                        onclick="toggleUserStatus(${user.id})">
                    <i class="fas fa-${user.status === 'active' ? 'ban' : 'check'}"></i> 
                    ${user.status === 'active' ? '禁用' : '启用'}
                </button>
            </td>
        </tr>
    `).join('');
}

// 获取状态文本
function getStatusText(status) {
    const statusMap = {
        'paid': '已支付',
        'pending': '待支付',
        'cancelled': '已取消'
    };
    return statusMap[status] || status;
}

// 显示添加课程模态框
function showAddCourseModal() {
    document.getElementById('add-course-modal').style.display = 'block';
}

// 隐藏添加课程模态框
function hideAddCourseModal() {
    document.getElementById('add-course-modal').style.display = 'none';
    document.getElementById('add-course-form').reset();
}

// 处理添加课程
function handleAddCourse(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const newCourse = {
        id: coursesData.length + 1,
        title: formData.get('title'),
        grade: parseInt(formData.get('grade')),
        price: parseFloat(formData.get('price')),
        status: 'active',
        icon: formData.get('icon') || '📚',
        description: formData.get('description'),
        features: formData.get('features').split(',').map(f => f.trim())
    };
    
    coursesData.push(newCourse);
    updateCoursesTable();
    hideAddCourseModal();
    showNotification('课程添加成功！', 'success');
}

// 编辑课程
function editCourse(courseId) {
    const course = coursesData.find(c => c.id === courseId);
    if (course) {
        showNotification(`编辑课程: ${course.title}`, 'info');
        // 这里可以打开编辑模态框
    }
}

// 删除课程
function deleteCourse(courseId) {
    if (confirm('确定要删除这个课程吗？')) {
        coursesData = coursesData.filter(c => c.id !== courseId);
        updateCoursesTable();
        showNotification('课程删除成功！', 'success');
    }
}

// 查看订单
function viewOrder(orderId) {
    const order = ordersData.find(o => o.id === orderId);
    if (order) {
        showNotification(`查看订单: ${order.id}`, 'info');
        // 这里可以打开订单详情模态框
    }
}

// 确认订单
function confirmOrder(orderId) {
    const order = ordersData.find(o => o.id === orderId);
    if (order) {
        order.status = 'paid';
        updateOrdersTable();
        showNotification('订单确认成功！', 'success');
    }
}

// 编辑用户
function editUser(userId) {
    const user = usersData.find(u => u.id === userId);
    if (user) {
        showNotification(`编辑用户: ${user.username}`, 'info');
        // 这里可以打开编辑用户模态框
    }
}

// 切换用户状态
function toggleUserStatus(userId) {
    const user = usersData.find(u => u.id === userId);
    if (user) {
        user.status = user.status === 'active' ? 'inactive' : 'active';
        updateUsersTable();
        showNotification(`用户状态已${user.status === 'active' ? '启用' : '禁用'}！`, 'success');
    }
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
        top: 20px;
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
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // 3秒后自动移除
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'times-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

function getNotificationColor(type) {
    const colors = {
        success: '#28a745',
        error: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8'
    };
    return colors[type] || '#17a2b8';
}

// 点击模态框外部关闭
window.onclick = function(event) {
    const modal = document.getElementById('add-course-modal');
    if (event.target === modal) {
        hideAddCourseModal();
    }
}

// 添加动画样式
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
`;
document.head.appendChild(style);

// 搜索功能
document.getElementById('user-search').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredUsers = usersData.filter(user => 
        user.username.toLowerCase().includes(searchTerm) ||
        user.phone.includes(searchTerm)
    );
    
    const tbody = document.getElementById('users-table-body');
    tbody.innerHTML = filteredUsers.map(user => `
        <tr>
            <td>${user.id}</td>
            <td>${user.username}</td>
            <td>${user.phone}</td>
            <td>${user.registerTime}</td>
            <td>
                <span class="order-status ${user.status === 'active' ? 'paid' : 'pending'}">
                    ${user.status === 'active' ? '正常' : '禁用'}
                </span>
            </td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="editUser(${user.id})">
                    <i class="fas fa-edit"></i> 编辑
                </button>
                <button class="btn btn-sm ${user.status === 'active' ? 'btn-danger' : 'btn-success'}" 
                        onclick="toggleUserStatus(${user.id})">
                    <i class="fas fa-${user.status === 'active' ? 'ban' : 'check'}"></i> 
                    ${user.status === 'active' ? '禁用' : '启用'}
                </button>
            </td>
        </tr>
    `).join('');
});

// 订单状态过滤
document.getElementById('order-status-filter').addEventListener('change', function(e) {
    const status = e.target.value;
    const filteredOrders = status ? ordersData.filter(order => order.status === status) : ordersData;
    
    const tbody = document.getElementById('orders-table-body');
    tbody.innerHTML = filteredOrders.map(order => `
        <tr>
            <td>${order.id}</td>
            <td>${order.user}</td>
            <td>${order.course}</td>
            <td>¥${order.amount}</td>
            <td>
                <span class="order-status ${order.status}">
                    ${getStatusText(order.status)}
                </span>
            </td>
            <td>${order.time}</td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="viewOrder('${order.id}')">
                    <i class="fas fa-eye"></i> 查看
                </button>
                ${order.status === 'pending' ? 
                    `<button class="btn btn-sm btn-success" onclick="confirmOrder('${order.id}')">
                        <i class="fas fa-check"></i> 确认
                    </button>` : ''
                }
            </td>
        </tr>
    `).join('');
});