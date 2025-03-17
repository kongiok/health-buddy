const Friends = () => {
  return (
    <>
    <div className="flex flex-col items-center flex-grow">
   <div className="w-full bg-white py-4 text-center text-gray-700 text-2xl font-semibold">
    好友
   </div>
   <div className="w-full px-4 py-2">
    <div className="relative">
     <input className="w-full py-2 pl-10 pr-4 rounded-full bg-blue-200 text-blue-600" placeholder="搜尋" type="text"/>
     <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600">
     </i>
     <i className="fas fa-plus absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-600">
     </i>
    </div>
   </div>
   <div className="w-full px-4 py-2">
    <div className="flex items-center justify-between bg-white p-4 rounded-lg mb-2">
     <div className="flex items-center">
      <img alt="Cartoon character with a blue hat" className="w-12 h-12 rounded-full mr-4" height="50" src="https://storage.googleapis.com/a1aa/image/CZKGXWgPQdEjfkK-i4OJG0PbfrenwK-qGlUNzHoH2ko.jpg" width="50"/>
      <div>
       <div className="text-blue-600 font-semibold">
        小八
       </div>
       <div className="text-gray-500">
        Oi~ 今天要一起運動嗎？
       </div>
      </div>
     </div>
     <div className="text-right">
      <div className="text-red-500">
       未讀1
      </div>
      <div className="text-green-500">
       線上
      </div>
     </div>
     <div className="flex flex-col items-center ml-4">
      <i className="fas fa-share text-gray-500 mb-2">
      </i>
      <i className="fas fa-trash text-gray-500">
      </i>
     </div>
    </div>
    <div className="flex items-center justify-between bg-white p-4 rounded-lg">
     <div className="flex items-center">
      <img alt="Cartoon character with a pink hat" className="w-12 h-12 rounded-full mr-4" height="50" src="https://storage.googleapis.com/a1aa/image/qA2_yoMiuAQXaPRhZrgAqrQHibhPdZJPVXBWjHi-ffE.jpg" width="50"/>
      <div>
       <div className="text-blue-600 font-semibold">
        吉伊
       </div>
       <div className="text-gray-500">
        呀嗚
       </div>
      </div>
     </div>
     <div className="text-right">
      <div className="text-red-500">
       未讀5
      </div>
      <div className="text-gray-500">
       7天前上線
      </div>
     </div>
     <div className="flex flex-col items-center ml-4">
      <i className="fas fa-share text-gray-500 mb-2">
      </i>
      <i className="fas fa-trash text-gray-500">
      </i>
     </div>
    </div>
   </div>
   <div className="flex-grow flex items-center justify-center">
    <img alt="Illustration of a tree with 'Way to go' text and 'Name' signature" className="w-48 h-48" height="200" src="https://storage.googleapis.com/a1aa/image/dYGt4j7OtBMTn_OIEWI7DEi-3ogdh3Mgci3QGzMjPYo.jpg" width="200"/>
   </div>
  </div>
  <div className="w-full text-right pr-4 py-2 text-blue-600">
   好友數 2/30
  </div>
    </>
  );
}
export default Friends;