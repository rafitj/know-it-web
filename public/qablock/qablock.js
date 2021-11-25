class QABlock {
  static get toolbox() {
    return {
      title: "QA Block",
      icon:
        '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>',
    };
  }

  render() {
    var question = document.createElement("input");
    question.placeholder = "Question";
    var answer = document.createElement("input");
    answer.placeholder = "Answer";
    var block = document.createElement("div");
    block.append(question);
    block.append(answer);
    return block;
  }

  save(blockContent) {
    console.log(blockContent.getElementsByTagName("INPUT"));
    return {
      question: blockContent.getElementsByTagName("INPUT")[0].value,
      answer: blockContent.getElementsByTagName("INPUT")[1].value,
    };
  }
}
