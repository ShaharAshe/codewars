<div>
    <div>
        <h3>Description:</h3>
        <div>
            <p>The <a href="https://www.youtube.com/watch?v=hvpXKZhNINc" target="_blank">Adapter Design Pattern</a> can be used, for example in the StarCraft game, to insert an external character in the game.</p>
            <p>The pattern consists in having a wrapper class that will adapt the code from the external source.</p>
        </div>
        <h2>Your Task</h2>
        <div>
            <p>The adapter receives an instance of the object that it is going to adapt and handles it in a way that works with our application.</p>
            <p>In this example we have the pre-loaded classes:</p>
        <pre><code><span>class</span> <span>Marine</span> {
  <span>attack</span>(<span>target</span>) {
    <span>target</span>.<span>health</span> <span>-=</span> <span>6</span>;
  }
}

<span>class</span> <span>Zealot</span> {
  <span>attack</span>(<span>target</span>) {
    <span>target</span>.<span>health</span> <span>-=</span> <span>8</span>;
  }
}

<span>class</span> <span>Zergling</span> {
  <span>attack</span>(<span>target</span>) {
    <span>target</span>.<span>health</span> <span>-=</span> <span>5</span>;
  }
}

<span>class</span> <span>Mario</span> {
  <span>jumpAttack</span>() {
    <span>console</span>.<span>log</span>(<span>'Mamamia!'</span>);
    <span>return</span> <span>3</span>;
  }
}
</code></pre>
            <p>Complete the code so that we can create a <code>MarioAdapter</code> that can attack as other units do.</p>
            <p><strong>Note</strong> to calculate how much damage <code>mario</code> is going to do you have to call the <code>jumpAttack</code> method (<code>jump_attack</code> in Python).</p>
        </div>
    </div>
</div>