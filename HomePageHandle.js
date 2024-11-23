
import React, { useState } from 'react';

const HomePage = () => {
  const [user, setUser] = useState('Ngô Ngọc Quý'); // Tên người dùng
  const [searchTerm, setSearchTerm] = useState(''); // Từ khóa tìm kiếm
  const [notifications, setNotifications] = useState(['Thông báo 1', 'Thông báo 2']); // Thông báo giả lập
  const [recentBlogs, setRecentBlogs] = useState([
    { id: 1, title: 'Blog mới nhất 1', date: '2024-11-24' },
    { id: 2, title: 'Blog mới nhất 2', date: '2024-11-23' }
  ]); // Blog mới nhất giả lập
  const [allBlogs, setAllBlogs] = useState([
    { id: 3, title: 'Blog cũ 1', date: '2024-11-22' },
    { id: 4, title: 'Blog cũ 2', date: '2024-11-21' }
  ]); // Tất cả blog giả lập

  // Xử lý tìm kiếm
  const handleSearch = () => {
    console.log('Tìm kiếm:', searchTerm);
  };

  // Điều hướng đến trang tạo blog
  const handleCreateBlog = () => {
    console.log('Điều hướng đến trang tạo blog.');
  };

  // Điều hướng đến trang danh sách blog
  const handleViewAllBlogs = () => {
    console.log('Điều hướng đến trang danh sách blog.');
  };

  // Điều hướng đến trang hồ sơ cá nhân
  const handleViewProfile = () => {
    console.log('Điều hướng đến trang hồ sơ cá nhân.');
  };

  // Đăng xuất
  const handleLogout = () => {
    console.log('Đăng xuất thành công.');
  };

  // Hiển thị tất cả blog
  const handleShowAll = () => {
    console.log('Hiển thị tất cả blog.');
  };

  return (
    <div>
      <header>
        <h1>Chào mừng, {user}!</h1>
        <input
          type="text"
          placeholder="Tìm kiếm blog..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Tìm kiếm</button>
        <div>
          <button onClick={() => console.log('Thông báo:', notifications)}>
            Thông báo ({notifications.length})
          </button>
        </div>
      </header>
      <nav>
        <button onClick={handleCreateBlog}>Tạo Blog</button>
        <button onClick={handleViewAllBlogs}>Danh sách Blog</button>
        <button onClick={handleViewProfile}>Hồ sơ cá nhân</button>
        <button onClick={handleLogout}>Đăng xuất</button>
      </nav>
      <main>
        <section>
          <h2>Danh sách blog mới nhất</h2>
          <ul>
            {recentBlogs.map((blog) => (
              <li key={blog.id}>
                {blog.title} - {blog.date}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Tất cả blog</h2>
          <ul>
            {allBlogs.map((blog) => (
              <li key={blog.id}>
                {blog.title} - {blog.date}
              </li>
            ))}
          </ul>
          <button onClick={handleShowAll}>Hiển thị tất cả</button>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
