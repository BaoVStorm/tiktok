import Heading from './Heading'
import Pharagraph from './Pharagraph'

// giúp tạo ra nhiều file css độc lập, không có bị ảnh hưởng bởi nhau
// có thể đặt TRÙNG tên class mà ko bị ảnh hưởng nhiều

// lưu ý    
// CssModule không nhận 1 tag, không nhận ký tự *. Chỉ nhận class và id
    // nếu có các tag hay * thì sẽ áp dụng cho tất cả

function App() {
    return (
        <div style={{ padding: '0 32px' }}>
            <Heading/>
            <Pharagraph/>
        </div>
    );
}

export default App;
