<div>
    <h3>Description:</h3>
    <div>
        <p>The <a href="https://www.youtube.com/watch?v=KSEyIXnknoY" target="_blank">Visitor Design Pattern</a> can be used, for example, to determine how an attack deals a different amount of damage to a unit in the StarCraft game.</p>
        <p>The pattern consists of delegating the responsibility to a different class.</p>
        <p>When a unit takes damage it can tell the visitor what to do with itself.</p>
        <h2>Your Task</h2>
        <p>Complete the code so that when a <code>Tank</code> attacks a <code>Marine</code> it takes <code>21</code> damage and when a <code>Tank</code> attacks a <code>Marauder</code> it takes <code>32</code> damage.</p>
        <p>The Marine's initial health should be set to <code>100</code> and the Marauder's health should be set to <code>125</code>.</p>
        <p>You have 3 classes:</p>
        <ul>
            <li>
                <code>Marine</code>: has a <code>health</code> property and <code>accept(visitor)</code> method</li>
            <li>
                <code>Marauder</code>: has a <code>health</code> property and <code>accept(visitor)</code> method</li>
            <li><code>TankBullet</code>: the visitor class. Has <code>visitLight(unit)</code> and <code>visitArmored(unit)</code> methods</li>
        </ul>
    </div>
</div>