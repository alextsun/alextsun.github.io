var LeftNav = React.createClass({
    render: function() {
        return (
            <div id='cssmenu'>
                <ul>
                    <li className='active'><a href='index.html'><span>Home</span></a></li>
                    <li><a href='about.html'><span>About</span></a></li>
                    <li><a href='projects.html'><span>Projects</span></a></li>
                    <li className='has-sub'><a href='#'><span>Coursework</span></a>
                        <ul>
                            <li><a href='cse.html'><span>Computer Science</span></a></li>
                            <li><a href='stat.html'><span>Statistics</span></a></li>
                            <li><a href='math.html'><span>Mathematics</span></a></li>
                        </ul>
                    </li>
                    <li className='last'><a href='contact.html'><span>Contact</span></a></li>
                </ul>
            </div>
        );
    }
});
/*
React.render(
<LeftNav />,
    document.getElementById('menu')
);*/