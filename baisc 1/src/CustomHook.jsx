import js from '@eslint/js';
import React, { useEffect, useState } from 'react'
import { usePostTitle , useFetch} from './hooks/hooksFetch';

function CustomHook() {
  const {finalData} = useFetch("");
    return (
  
<div>
        {JSON.stringify(finalData)}
</div>
  )
}

export default CustomHook