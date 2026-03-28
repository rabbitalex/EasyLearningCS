// 卷三 · 数据结构与算法 - 算法篇
const CHAPTER_V3_ALGO = {
  chapter: "第二章：算法",
  icon: "🧮",
  lessons: [
    {
      id: "v3-algo-1",
      title: "排序算法 —— 让数据有序的魔法",
      xp: 30,
      code: '# 经典排序算法比较\nimport random\n\ndef bubble_sort(arr):\n    arr = arr.copy()\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n-i-1):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n    return arr\n\ndef selection_sort(arr):\n    arr = arr.copy()\n    n = len(arr)\n    for i in range(n):\n        min_idx = i\n        for j in range(i+1, n):\n            if arr[j] < arr[min_idx]:\n                min_idx = j\n        arr[i], arr[min_idx] = arr[min_idx], arr[i]\n    return arr\n\ndef quick_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    pivot = arr[len(arr)//2]\n    left = [x for x in arr if x < pivot]\n    mid = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    return quick_sort(left) + mid + quick_sort(right)\n\ndata = [random.randint(1, 100) for _ in range(10)]\nprint("原始数据:", data)\nprint("冒泡排序:", bubble_sort(data))\nprint("选择排序:", selection_sort(data))\nprint("快速排序:", quick_sort(data))',
      steps: [
        {
          title: "排序：算法世界的第一课",
          content: `
<p>排序是最基础也最重要的算法。让我们通过动画来理解不同排序算法的工作原理！</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">📊 排序算法可视化</div>
  <div style="padding:1rem">
    <div style="display:flex;gap:0.5rem;margin-bottom:1rem;flex-wrap:wrap;justify-content:center">
      <button onclick="startSortAnim('bubble')" style="padding:0.4rem 0.8rem;border-radius:6px;border:none;background:#fd79a8;color:white;font-size:0.7rem;font-weight:700;cursor:pointer">冒泡排序</button>
      <button onclick="startSortAnim('selection')" style="padding:0.4rem 0.8rem;border-radius:6px;border:none;background:#00cec9;color:white;font-size:0.7rem;font-weight:700;cursor:pointer">选择排序</button>
      <button onclick="startSortAnim('quick')" style="padding:0.4rem 0.8rem;border-radius:6px;border:none;background:#FF9800;color:white;font-size:0.7rem;font-weight:700;cursor:pointer">快速排序</button>
      <button onclick="resetSortAnim()" style="padding:0.4rem 0.8rem;border-radius:6px;border:none;background:rgba(255,255,255,0.1);color:white;font-size:0.7rem;font-weight:700;cursor:pointer">🔄 重置</button>
    </div>
    <div id="sortBars" style="display:flex;align-items:flex-end;justify-content:center;gap:3px;height:140px;padding:0 0.5rem"></div>
    <div id="sortStatus" style="text-align:center;margin-top:0.5rem;font-size:0.75rem;color:rgba(255,255,255,0.5);font-weight:600"></div>
  </div>
</div>
<script>
var sortArr=[],sortIntv=null;
function resetSortAnim(){if(sortIntv)clearInterval(sortIntv);sortArr=[];for(var i=0;i<20;i++)sortArr.push(Math.floor(Math.random()*120)+10);renderSortBars();}
function renderSortBars(hi1,hi2){var el=document.getElementById('sortBars');if(!el)return;el.innerHTML='';sortArr.forEach(function(v,i){var color='rgba(253,121,168,0.6)';if(i===hi1)color='#FF9800';if(i===hi2)color='#fd79a8';el.innerHTML+='<div style="width:12px;height:'+v+'px;background:'+color+';border-radius:3px 3px 0 0;transition:height 0.15s"></div>';});}
function startSortAnim(type){if(sortIntv)clearInterval(sortIntv);if(sortArr.length===0)resetSortAnim();var st=document.getElementById('sortStatus');var arr=sortArr.slice();var steps=[];if(type==='bubble'){for(var i=0;i<arr.length;i++)for(var j=0;j<arr.length-i-1;j++){steps.push({a:arr.slice(),i:j,j:j+1});if(arr[j]>arr[j+1]){var t=arr[j];arr[j]=arr[j+1];arr[j+1]=t;}}}else if(type==='selection'){for(var i=0;i<arr.length;i++){var mi=i;for(var j=i+1;j<arr.length;j++){steps.push({a:arr.slice(),i:mi,j:j});if(arr[j]<arr[mi])mi=j;}var t=arr[i];arr[i]=arr[mi];arr[mi]=t;steps.push({a:arr.slice(),i:i,j:mi});}}else{steps=bubbleStepsForQuick(arr);}steps.push({a:arr.slice(),i:-1,j:-1});var si=0;st.textContent=type+' 排序中...';sortIntv=setInterval(function(){if(si>=steps.length){clearInterval(sortIntv);sortArr=arr;renderSortBars();st.textContent='✅ 排序完成！';return;}var s=steps[si];sortArr=s.a;renderSortBars(s.i,s.j);si++;},80);}
function bubbleStepsForQuick(arr){var a=arr.slice();var steps=[];for(var i=0;i<a.length;i++)for(var j=0;j<a.length-i-1;j++){steps.push({a:a.slice(),i:j,j:j+1});if(a[j]>a[j+1]){var t=a[j];a[j]=a[j+1];a[j+1]=t;}}return steps;}
if(document.getElementById('sortBars'))resetSortAnim();
</script>`
        },
        {
          title: "搜索算法 —— 二分查找",
          content: `
<p><strong>二分查找</strong>是最高效的查找算法之一，它要求数据已排序，每次将搜索范围缩小一半。</p>
<div class="theory-anim-box">
  <div class="theory-anim-title">🔍 二分查找动画</div>
  <div style="padding:1rem">
    <div style="text-align:center;margin-bottom:0.5rem">
      <span style="font-size:0.75rem;color:rgba(255,255,255,0.5)">在有序数组中查找目标值：</span>
      <input type="number" id="bsTarget" value="23" min="1" max="50" style="width:50px;padding:0.3rem;border-radius:6px;border:1px solid rgba(253,121,168,0.4);background:rgba(253,121,168,0.15);color:white;font-weight:700;text-align:center;font-size:0.8rem">
      <button onclick="runBinarySearch()" style="padding:0.3rem 0.8rem;border-radius:6px;border:none;background:#fd79a8;color:white;font-size:0.7rem;font-weight:700;cursor:pointer;margin-left:0.3rem">查找</button>
    </div>
    <div id="bsArray" style="display:flex;gap:2px;justify-content:center;margin:0.8rem 0;flex-wrap:wrap"></div>
    <div id="bsLog" style="font-family:monospace;font-size:0.7rem;color:rgba(255,255,255,0.5);background:rgba(0,0,0,0.2);border-radius:8px;padding:0.5rem;max-height:100px;overflow-y:auto;margin-top:0.5rem"></div>
  </div>
</div>
<script>
var bsData=[2,5,8,11,14,17,20,23,26,29,32,35,38,41,44,47];
function renderBsArray(lo,hi,mid,found){var el=document.getElementById('bsArray');el.innerHTML='';bsData.forEach(function(v,i){var bg='rgba(255,255,255,0.06)',bor='rgba(255,255,255,0.15)',col='rgba(255,255,255,0.5)';if(i>=lo&&i<=hi){bg='rgba(253,121,168,0.15)';bor='rgba(253,121,168,0.3)';col='#ffb3d1';}if(i===mid){bg='rgba(255,152,0,0.3)';bor='#FF9800';col='#FF9800';}if(found===i){bg='rgba(105,240,174,0.3)';bor='#69F0AE';col='#69F0AE';}el.innerHTML+='<div style="min-width:28px;height:28px;display:flex;align-items:center;justify-content:center;border:1px solid '+bor+';background:'+bg+';border-radius:5px;font-size:0.65rem;font-weight:700;color:'+col+';font-family:monospace">'+v+'</div>';});}
function runBinarySearch(){var target=parseInt(document.getElementById('bsTarget').value);var log=document.getElementById('bsLog');log.innerHTML='';renderBsArray(0,bsData.length-1,-1,-1);var lo=0,hi=bsData.length-1,step=0;var intv=setInterval(function(){if(lo>hi){clearInterval(intv);log.innerHTML+='<div style="color:#fd79a8">❌ 未找到 '+target+'</div>';return;}var mid=Math.floor((lo+hi)/2);step++;log.innerHTML+='<div>[步骤'+step+'] lo='+lo+' hi='+hi+' mid='+mid+' arr[mid]='+bsData[mid]+'</div>';if(bsData[mid]===target){renderBsArray(lo,hi,mid,mid);log.innerHTML+='<div style="color:#69F0AE">✅ 找到! 位置='+mid+'</div>';clearInterval(intv);return;}renderBsArray(lo,hi,mid,-1);if(bsData[mid]<target){lo=mid+1;log.innerHTML+='<div style="color:rgba(255,255,255,0.3)">  → 目标在右半部分</div>';}else{hi=mid-1;log.innerHTML+='<div style="color:rgba(255,255,255,0.3)">  → 目标在左半部分</div>';}log.scrollTop=log.scrollHeight;},600);}
if(document.getElementById('bsArray'))renderBsArray(0,bsData.length-1,-1,-1);
</script>`
        }
      ],
      challenge: {
        description: "实现二分查找函数binary_search(arr, target)，在排序数组中查找目标值，返回索引或-1。",
        hint: "使用左右指针不断缩小范围",
        solution: 'def binary_search(arr, target):\n    lo, hi = 0, len(arr) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            lo = mid + 1\n        else:\n            hi = mid - 1\n    return -1\n\narr = [1,3,5,7,9,11,13,15,17]\nprint(binary_search(arr, 7))  # 3\nprint(binary_search(arr, 10)) # -1'
      }
    }
  ]
};

registerChapter('dsa', CHAPTER_V3_ALGO);
