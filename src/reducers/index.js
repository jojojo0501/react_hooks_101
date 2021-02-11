action = {
  type:'CREATE_EVENTS',
  title:'2020東京オリンピックのお知らせ',
  body:'2020年に東京でオリンピックを開催します！つきましては'
}

state = [];

state = [
  {id:1,title:'タイトル1',body:'ボディー１'},
  {id:2,title:'タイトル2',body:'ボディー2'},
  {id:3,title:'タイトル3',body:'ボディー3'},
];

const events = (state = [],action) => {
  swich (action.type){
    case 'CREATE_EVENTS':
      const event = {title: action.title,body:action.body};
      const length = state.length;
      const id =length ===0 ? 1 : state[length -1].id + 1;
      return [...state,{id:id,...event}];
    case 'DELETE_EVENTS':
    case 'DELETE_ALL_EVENTS':
      return [];
    default:
      return state;
  }
};

export default events ;