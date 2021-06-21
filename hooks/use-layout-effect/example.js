// reference https://www.zhihu.com/people/stonexer/posts

// example1: callback 内部对 state 的访问依赖于 JavaScript 函数的闭包，使得问题无解
function Form() {
  const [text, setText] = useState('');

  // 每次 text 变化时 handleSubmit 都会变
  const hanldeSubmit = useCallback(() => {
    console.log(text)
  }, [text])

  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <ExpansiveComp onSubmit={hanldeSubmit} />
    </>
  )
}

// 解法1:
function Form() {
  const [text, setText] = useState('')
  const textRef = useRef();

  // 将 text 写入到 ref, 这里没有添加依赖，不会有问题？
  useLayoutEffect(() => {
    textRef.current = text;
  })

  //  handleSubmit 只会依赖 textRef 的变化。不会在 text 改变时更新
  const handleSubmit = useCallback(() => {
    const currentText = textRef.current; // 从 ref 中读取 text
    alert(currentText);
  }, [textRef]);

  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <ExpansiveComp onSubmit={hanldeSubmit} />
    </>
  )
}


// 更好的解法是使用useReducer