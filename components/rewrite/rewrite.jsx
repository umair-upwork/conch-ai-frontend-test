import mixpanel from 'mixpanel-browser';
import React, { useEffect, useState } from 'react'
import {
  FaRegTrashAlt
} from "react-icons/fa";

function RewriteCard({ sentence, perplexity, rewriteSingleSentence, deleteSingleSentence, id, rewriteRef, alreadyRewritten, previousText }) {
  
  const [tokenCost, setTokenCost] = useState(null);

  useEffect(() => {
    // calculate token cost based on number of characters in sentence / 4 and round up
    setTokenCost(Math.ceil(sentence.length / 4));
  }, [sentence]);
  
  return (
    <div className="rewriteOptionCard drop-shadow-lg px-8 py-8 " id={`rewrite-${id}`} ref={rewriteRef} value={sentence}>
      <div className="flex flex-row justify-between items-center">
        <p className="text-xl text-red-500 font-semibold">Perplexity: {perplexity}</p>
        <FaRegTrashAlt onClick={() => {
          mixpanel.track("Clicked Delete Sentence", {length:sentence.length, perplexity: perplexity})
          deleteSingleSentence(sentence, perplexity, id)}
          } />
      </div>
      <p className="mt-4 mb-4 italic overflow-hidden text-ellipsis ">{sentence}</p>
      <div className="flex flex-row justify-between items-center w-full mt-4">
        <p className="px-2 py-1 ">Cost: {tokenCost} tokens</p>
        <button className="w-fit rewriteButton px-2 py-1 text-white" onClick={() => 
          {
            //prettier-ignore
            mixpanel.track("Clicked Rewrite Sentence", {"length":sentence.length.toString(), "perplexity": perplexity.toString()})
            rewriteSingleSentence(sentence, perplexity, id, tokenCost) 
          }
          }>
          <p>✏️ Rewrite Sentence</p>
        </button>
      </div>
    </div>
  )
}

export default RewriteCard