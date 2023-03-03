import React, { useEffect, useState } from 'react'
import {
  FaRegTrashAlt
} from "react-icons/fa";
import mixpanel from 'mixpanel-browser';

function RewriteParagraphCard({ clump, text, rewriteParagraph, deleteParagraphRewriteObject, id, rewriteRef, alreadyRewritten, previousText }) {
  
  const [tokenCost, setTokenCost] = useState(null);

  const [avgPerplexity, setAvgPerplexity] = useState(0);

  useEffect(() => {
    let totalPerplexity = 0;

    clump.forEach((sentence) => {
      totalPerplexity += sentence.perplexity;
    });

    setAvgPerplexity(Math.ceil(totalPerplexity / clump.length));
  }, [clump]);


  useEffect(() => {
    const textLength = text ? text.length : 0;
    // calculate token cost based on number of characters in sentence / 4 and round up
    setTokenCost(Math.ceil(textLength / 4));
  }, [text]);
  
  return (
    <div className="rewriteOptionCard px-8 py-4" id={`rewrite-${id}`} ref={rewriteRef} value={text}>
      <div className="flex flex-row justify-between items-center">
        <p className="text-xl text-red-500">Perplexity: {avgPerplexity}</p>
        <FaRegTrashAlt onClick={() => deleteParagraphRewriteObject(id)} />
      </div>
      <p className="mt-4 mb-4 italic overflow-hidden text-ellipsis ">{text}</p>
      <div className="flex flex-row justify-between items-center w-full mt-4">
        <p className="px-2 py-1">{tokenCost} tokens</p>
        <button className="w-fit rewriteButton px-2 py-1 text-white" onClick={() => {
          //prettier-ignore
          mixpanel.track("Clicked Rewrite Paragraph", {"length":text.length.toString(), "avgPerplexity": avgPerplexity ? avgPerplexity.toString() : "", "tokenCost": tokenCost ? tokenCost.toString() : ""})
          rewriteParagraph(text, avgPerplexity, id, tokenCost)}}>
          <p className="w-fit text-center text-md text-white font-semibold">✏️ Rewrite Paragraph</p>
        </button>
      </div>
    </div>
  )
}

export default RewriteParagraphCard