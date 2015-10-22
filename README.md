# innerHTML vs. createElement vs. cloneNode

Me today on Twitter (https://twitter.com/soprano/status/657010434004897792):

> Today's discovery: Every DOM access in IE11 (or Edge) seemingly takes 0.01ms. Chrome, Firefox, Safari all 10x faster (less than 0.001ms ea).

---

The scripts in this repo are how I tested. We create a simple DOM hierarchy with 9 nodes and a few attributes each. The hierarchy looks like this:

```
<li data-reactid="22" class="clearfix sideNavItem stat_elem" id="navItem_217974574879787">
  <div data-reactid="23" class="buttonWrap" data-testid="bookmark_edit_button">
    <div data-reactid="24" class="uiSideNavEditButton">
      <a data-reactid="25" href="#" title="Edit Messages link" aria-label="Edit Messages link" class="_1wc5 _26tg accessible_elem"></a>
    </div>
  </div>
  <a data-reactid="26" data-testid="left_nav_item_Messages" class="_5afe sortableItem" data-gt="{&quot;bmid&quot;:&quot;217974574879787&quot;,&quot;count&quot;:&quot;0&quot;,&quot;bookmark_type&quot;:&quot;type_facebook_app&quot;,&quot;rank&quot;:&quot;3&quot;,&quot;nav_items_count&quot;:&quot;4&quot;,&quot;nav_section&quot;:&quot;favorites&quot;,&quot;sec_position&quot;:&quot;1&quot;,&quot;screen_height&quot;:&quot;&quot;,&quot;screen_width&quot;:&quot;&quot;,&quot;total&quot;:&quot;22&quot;,&quot;masher&quot;:&quot;item&quot;}" title="Messages" href="/messages/" draggable="true">
    <span data-reactid="27" class="imgWrap" data-testid="bookmark_icon_left_nav">
      <i data-reactid="28" height="16" width="16" draggable="true" class="img sp_YH4CuyEceFD sx_1045ce"></i>
    </span>
    <div data-reactid="29" class="linkWrap noCount">
      <span data-reactid="30" class="">Messages</span>
    </div>
  </a>
</li>
```

This structure is based off of the left navigation bookmarks on the Facebook site when you're logged in. In this repo I'm testing just setting an `.innerHTML` string, calling `.createElement` and `.setAttribute`, and -- since this test case is inspired by a list where much of node structure is the same for each item -- calling `.cloneNode(true)` then setting the attributes that differ across each item.

See bench.js for the exact code I'm testing.

To run the tests, start up an HTTP server in this directory, then visit:

* http://127.0.0.1:8080/runner.html?testFn=testHTML
* http://127.0.0.1:8080/runner.html?testFn=testCreate
* http://127.0.0.1:8080/runner.html?testFn=testClone

It should run 40 trials (each trial creates this hierarchy 1000 times) and give you the mean time (in ms), along with a confidence interval for that mean. Each trial is run in a new iframe, so any JIT warmup time should be counted in the numbers.

You can also visit `bench.html?testFn=testHTML` directly to run one trial.

## Results

All numbers in ms, lower numbers are better.

**Chrome 46.0.2490.64 on my Mac laptop:**

* testHTML: 12.9, 99.7% ci: [12.5, 13.3]
* testCreate: 16.0, 99.7% ci: [15.3, 16.7]
* testClone: 12.7, 99.7% ci: [12.1, 13.5]

**Firefox 41.0.2 on my Mac laptop:**

* testHTML: 58.9, 99.7% ci: [57.4, 60.5]
* testCreate: 44.7, 99.7% ci: [43.8, 45.6]
* testClone: 34.0, 99.7% ci: [33.3, 34.9]

**Safari 9.0 on my Mac laptop:**

* testHTML: 29.1, 99.7% ci: [28.4, 29.9]
* testCreate: 9.3, 99.7% ci: [9.0, 9.6]
* testClone: 8.8, 99.7% ci: [8.3, 9.2]

**Edge 20.10240.16384.0 in a Windows 10 VM on my Mac laptop:**

* testHTML: 396.4, 99.7% ci: [383.4, 413.3]
* testCreate: 640.2, 99.7% ci: [622.4, 662.6]
* testClone: 281.6, 99.7% ci: [258.9, 315.2]

**IE 11.0.10240.16384 in a Windows 10 VM on my Mac laptop:**

* testHTML: 371.5, 99.7% ci: [352.4, 393.1]
* testCreate: 683.6, 99.7% ci: [642.5, 725.5]
* testClone: 275.4, 99.7% ci: [258.7, 302.0]

**Chrome 46.0.2490.71 in a Windows 10 VM on my Mac laptop:**

* testHTML: 42.3, 99.7% ci: [41.2, 43.6]
* testCreate: 19.9, 99.7% ci: [18.9, 20.8]
* testClone: 15.8, 99.7% ci: [14.9, 16.8]

## Conclusion

It seems like Edge and IE 11 are on the order of 10x to 20x slower than Chrome, Firefox, and Safari. The slowness of the `document.createElement` alternative is particularly frustrating because (presumably) the browser needs to perform almost the same operations when parsing the HTML, but executing them from JavaScript takes a huge performance hit.

Using `.cloneNode`, we can recoup most of the losses in Edge/IE, but we still see that each DOM access has a considerable cost: if you modify `testCreate()` or `testClone()` to comment out individual DOM accesses, you'll find that each dom access has a cost of around 0.01 ms, which adds up quickly.

Did I miss something? Was this test unfair somehow? Do you know of a way to make these test cases run faster? Please open an issue or contact me directly if so!
