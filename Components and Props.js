//Component cho phép bạn chia UI thành các phần độc lập, có thể tái sử dụng và hoàn toàn tách biệt nhau. Về mặt khái niệm, các components cũng giống như các hàm Javascript. Chúng nhận bất kỳ đầu vào nào (còn gọi là "props") và trả về các React elements mô tả những gì sẽ xuất hiện trên màn hình.

//Function Components and class Componets 
//Cách đơn giản nhất để định nghĩa một components là viết một hàm Javascript

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

//Hàm này là một React componets hợp lệ về nó nhận đầu vào là một tham số objects "props" với dữ liệu và trả về một React element. Chúng ta cacs components này là "function components" vì chúng là các hàm Javascript theo đúng nghĩa đen</p>
  
// class Welcome extends React.component {
//     render() {
//         return <h1> Hello, {this.props.name}</h1>
//     }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
function App() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
  }
  function formatDate(date) {
    return date.toLocaleDateString();
  }

// Tách Components 
    function Comment(props) {
        return (
          <div className="Comment">
            <div className="UserInfo">
              <img className="Avatar"
                src={props.author.avatarUrl}
                alt={props.author.name}
                style={{width:'5%'}}
              />
              <div className="UserInfo-name">
                {props.author.name}
              </div>
            </div>
            <div className="Comment-text">
              {props.text}
            </div>
            <div className="Comment-date">
              {formatDate(props.date)}
            </div>
          </div>
        );
      }

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://ih1.redbubble.net/image.979250210.7502/flat,750x,075,f-pad,750x1000,f8f8f8.webp'
    }
  };

const element = <Comment date={comment.date} text={comment.text} author={comment.author} />;

root.render(element);
