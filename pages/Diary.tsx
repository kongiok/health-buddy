const Diary = () => {
  return <>
    <div className="diaryPage">
      {/* <!-- Header --> */}
      <div className="title">
        <h1>日記</h1>
      </div>
      {/* <!-- Search Bar --> */}
      <div className="search">
        <i className="searchBtn"></i>
        <input className="search-bar" placeholder="搜尋" type="text" />
        <i className="filter-icon"></i>
      </div>
      {/* <!-- Diary Entries --> */}
      <div className="data-section">
        {/* <!-- Entry for 2025/3/8 --> */}
        <div className="date-bar">
          2025/3/8 Saturday
        </div>
        <div className="data-container">
          <div className="data-item">
            <p className="data-time">10:30</p>
            <img alt="Water icon" className="w-8 h-8 rounded-full bg-blue-200" height="32" src="https://storage.googleapis.com/a1aa/image/3tTtrgfW4TZIh1tofVijfuPmZJBojjGHa1Q1N75bD9k.jpg" width="32" />
            <div className="item-info">
              <div className="item-title">
                飲水
              </div>
              <div className="item-description">
                250毫升 / 0大卡
              </div>
            </div>
          </div>

          <div className="data-item">
          <p className="data-time">11:30</p>
            <img alt="Meal icon" className="w-8 h-8 rounded-full bg-blue-200" height="32" src="https://storage.googleapis.com/a1aa/image/0MxnuWSXP9jsg_tQtaG9IdsqvRKP6Kfx5OJEV_bEBpQ.jpg" width="32" />
            <div className="item-info">
              <div className="item-title">
                用餐
              </div>
              <div className="item-description">
                咖哩飯 / 800大卡 / 蛋白質15克
              </div>
            </div>
          </div>

          <div className="data-item">
          <p className="data-time">12:30</p>
            <img alt="Exercise icon" className="w-8 h-8 rounded-full bg-blue-200" height="32" src="https://storage.googleapis.com/a1aa/image/JhhpLYVFkzPzce28Lt_QXK_2hlII39O7CbmNeCnhCqc.jpg" width="32" />
            <div className="item-info">
              <div className="item-title">
                運動
              </div>
              <div className="item-description">
                慢跑 / 1小時20分鐘 / 消耗了430卡
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>;
};

export default Diary;