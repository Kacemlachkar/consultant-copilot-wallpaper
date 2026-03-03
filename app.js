// Content Database
const contentDatabase = {
    'business-central': {
        title: 'Business Central (AL)',
        sections: [
            {
                category: 'Table Declaration',
                content: `<div class="code-block"><span class="keyword">table</span> <span class="type">50100</span> <span class="function">SampleTable</span>
{
    <span class="keyword">fields</span>
    {
        <span class="keyword">field</span>(<span class="type">1</span>; <span class="function">PrimaryKey</span>; <span class="keyword">Code</span>[<span class="type">20</span>])
        {
            <span class="keyword">Caption</span> = <span class="string">'Primary Key'</span>;
        }
        <span class="keyword">field</span>(<span class="type">2</span>; <span class="function">Description</span>; <span class="keyword">Text</span>[<span class="type">100</span>])
        {
            <span class="keyword">Caption</span> = <span class="string">'Description'</span>;
        }
    }
}</div>`
            },
            {
                category: 'Event Subscription',
                content: `<div class="code-block"><span class="keyword">[EventSubscriber</span>(<span class="type">ObjectType::Table</span>, <span class="type">Database::Item</span>, <span class="string">'OnBeforeInsert'</span>, <span class="string">''</span>, <span class="keyword">true</span>, <span class="keyword">true</span><span class="keyword">)]</span>
<span class="keyword">procedure</span> <span class="function">OnBeforeInsertItem</span>(<span class="keyword">var</span> <span class="function">Rec</span>: <span class="keyword">Record</span> <span class="type">Item</span>)
<span class="keyword">begin</span>
    <span class="comment">// Your logic here</span>
<span class="keyword">end</span>;</div>`
            },
            {
                category: 'Common Methods',
                content: `<ul class="list-item">Get() - Retrieve single record with key</ul>
                          <ul class="list-item">FindFirst() - Find first record in active filter</ul>
                          <ul class="list-item">FindLast() - Find last record in active filter</ul>
                          <ul class="list-item">Insert(false) - Insert record silently</ul>
                          <ul class="list-item">Modify(false) - Modify without confirmation</ul>
                          <ul class="list-item">Delete(false) - Delete without confirmation</ul>
                          <ul class="list-item">SetRange() - Apply range filter</ul>`
            },
            {
                category: 'Query Pattern',
                content: `<div class="code-block"><span class="keyword">var</span> <span class="function">Item</span>: <span class="keyword">Record</span> <span class="type">Item</span>;
<span class="keyword">begin</span>
    <span class="function">Item</span>.<span class="function">SetRange</span>(<span class="function">Type</span>, <span class="function">Item</span>.<span class="function">Type</span>::Inventory);
    <span class="function">Item</span>.<span class="function">SetFilter</span>(<span class="function">Inventory</span>, <span class="string">'<>0'</span>);
    <span class="keyword">if</span> <span class="function">Item</span>.<span class="function">FindSet</span>() <span class="keyword">then</span>
        <span class="keyword">repeat</span>
            <span class="comment">// Process Item</span>
        <span class="keyword">until</span> <span class="function">Item</span>.<span class="function">Next</span>() = <span class="type">0</span>;
<span class="keyword">end</span>;</div>`
            },
            {
                category: 'Error Handling',
                content: `<div class="code-block"><span class="keyword">begin</span>
    <span class="keyword">if</span> <span class="function">Item</span>.<span class="function">FindFirst</span>() <span class="keyword">then</span> <span class="keyword">begin</span>
        <span class="comment">// Process item</span>
    <span class="keyword">end</span>;
    <span class="keyword">if</span> <span class="function">Error</span> <span class="keyword">then</span>
        <span class="function">Error</span>(<span class="string">'Custom error message'</span>);
<span class="keyword">end</span>;</div>`
            }
        ]
    },
    'power-apps': {
        title: 'Power Apps',
        sections: [
            {
                category: 'Common Formulas',
                content: `<div class="formula-note"><strong>Get current date:</strong> Today()</div>
                          <div class="formula-note"><strong>Get current user:</strong> User().Email</div>
                          <div class="formula-note"><strong>Format number:</strong> Text(Value, "0.00")</div>
                          <div class="formula-note"><strong>Concatenate text:</strong> Concatenate("Hello ", FullName)</div>
                          <div class="formula-note"><strong>Conditional value:</strong> If(Condition, Value1, Value2)</div>`
            },
            {
                category: 'Data Operations',
                content: `<div class="code-block"><span class="comment">// Filter data from SharePoint</span>
<span class="function">Filter</span>(<span class="type">SharePointList</span>, Status = <span class="string">"Active"</span>)

<span class="comment">// Sort results</span>
<span class="function">Sort</span>(<span class="type">Items</span>, <span class="function">Name</span>, <span class="type">Ascending</span>)

<span class="comment">// Search with contains</span>
<span class="function">Filter</span>(<span class="type">Items</span>, <span class="function">Contains</span>(<span class="function">Title</span>, SearchBox.Value))</div>`
            },
            {
                category: 'Form Validation',
                content: `<div class="code-block"><span class="comment">// On submit button</span>
<span class="keyword">If</span>(<span class="keyword">Not</span> <span class="function">IsBlank</span>(EmailField.Value),
    <span class="function">Patch</span>(<span class="type">SharePointList</span>, <span class="function">Defaults</span>(<span class="type">SharePointList</span>), 
        {Email: EmailField.Value}
    ),
    <span class="function">Notify</span>(<span class="string">"Email is required"</span>, <span class="type">NotificationType.Error</span>)
)</div>`
            },
            {
                category: 'Collection Management',
                content: `<div class="code-block"><span class="comment">// Create collection</span>
<span class="function">ClearCollect</span>(<span class="function">MyCollection</span>, 
    {Name: <span class="string">"Item1"</span>, Value: <span class="type">100</span>}
)

<span class="comment">// Add to collection</span>
<span class="function">Collect</span>(<span class="function">MyCollection</span>, {Name: <span class="string">"Item2"</span>})

<span class="comment">// Remove from collection</span>
<span class="function">RemoveIf</span>(<span class="function">MyCollection</span>, <span class="function">ID</span> = <span class="type">5</span>)</div>`
            },
            {
                category: 'Table Functions',
                content: `<ul class="list-item">AddColumns() - Add calculated columns to table</ul>
                          <ul class="list-item">DropColumns() - Remove specific columns</ul>
                          <ul class="list-item">RenameColumns() - Rename column headers</ul>
                          <ul class="list-item">ShowColumns() - Display only specific columns</ul>
                          <ul class="list-item">GroupBy() - Group records by column</ul>
                          <ul class="list-item">Distinct() - Get unique values</ul>`
            }
        ]
    },
    'power-automate': {
        title: 'Power Automate',
        sections: [
            {
                category: 'HTTP Request Pattern',
                content: `<div class="code-block"><span class="function">HTTP</span> (<span class="function">Azure</span> <span class="function">AD</span> <span class="function">OAuth</span>)
<span class="keyword">Method:</span> <span class="string">POST</span>
<span class="keyword">URI:</span> https://graph.microsoft.com/v1.0/me/messages
<span class="keyword">Headers:</span> 
  <span class="string">Content-Type: application/json</span>
  <span class="string">Authorization: Bearer @{outputs('HTTP').body}</span>
<span class="keyword">Body:</span> 
  {
    <span class="string">"subject"</span>: <span class="string">"@{triggerBody()?['subject']}"</span>,
    <span class="string">"body"</span>: <span class="string">"@{triggerBody()?['body']}"</span>
  }</div>`
            },
            {
                category: 'Common Expressions',
                content: `<div class="formula-note"><strong>Get current timestamp:</strong> utcNow()</div>
                          <div class="formula-note"><strong>Parse date:</strong> addDays(variables('StartDate'), 5)</div>
                          <div class="formula-note"><strong>JSON parse:</strong> json(body('Parse_JSON'))</div>
                          <div class="formula-note"><strong>String concat:</strong> concat('Hello ', variables('Name'))</div>
                          <div class="formula-note"><strong>Array length:</strong> length(variables('MyArray'))</div>`
            },
            {
                category: 'SharePoint Integration',
                content: `<div class="code-block"><span class="comment">// Create list item</span>
<span class="function">Create item</span>
<span class="keyword">Site URL:</span> <span class="string">@{triggerBody()?['SiteAddress']}</span>
<span class="keyword">List name:</span> <span class="string">Tasks</span>
<span class="keyword">Title:</span> <span class="string">@{triggerBody()?['TaskName']}</span>
<span class="keyword">Assigned to:</span> <span class="string">@{triggerBody()?['Owner']}</span>
<span class="keyword">Due date:</span> <span class="string">@{addDays(utcNow(), 7)}</span>

<span class="comment">// Get properties from lookup column</span>
<span class="function">Dynamic content</span>: @outputs('Get_item')?['body/LookupColumn/Value']</div>`
            },
            {
                category: 'Error Handling',
                content: `<div class="code-block"><span class="comment">// Add error handling action</span>
<span class="function">Configure run after</span>: <span class="string">has failed</span>

<span class="comment">// Get action outputs</span>
<span class="function">outputs</span>('<span class="function">HTTP</span>')['<span class="function">statusCode</span>']
<span class="function">outputs</span>('<span class="function">HTTP</span>')['<span class="function">body</span>']

<span class="comment">// Create email notification</span>
<span class="function">Compose</span>: <span class="string">Action failed with error: @{result('HTTP')['error']['message']}</span></div>`
            },
            {
                category: 'Approval Workflow',
                content: `<div class="code-block"><span class="keyword">Start approval</span>
<span class="keyword">Approval type:</span> <span class="string">Approve/Reject</span>
<span class="keyword">Title:</span> <span class="string">@{triggerBody()?['ApprovalTitle']}</span>
<span class="keyword">Assigned to:</span> <span class="string">approver@company.com</span>
<span class="keyword">Details:</span> <span class="string">@{triggerBody()?['Details']}</span>

<span class="keyword">Condition:</span> <span class="keyword">if</span> <span class="function">approvalResponse</span> = <span class="string">'Approve'</span>
  → Update item <span class="keyword">Status</span> = <span class="string">'Approved'</span>
<span class="keyword">else</span>
  → Update item <span class="keyword">Status</span> = <span class="string">'Rejected'</span></div>`
            }
        ]
    },
    'power-bi': {
        title: 'Power BI',
        sections: [
            {
                category: 'DAX Fundamentals',
                content: `<div class="formula-note"><strong>SUM with filter:</strong> CALCULATE(SUM('Sales'[Amount]), 'Date'[Year] = 2024)</div>
                          <div class="formula-note"><strong>Count distinct:</strong> DISTINCTCOUNT('Customer'[CustomerID])</div>
                          <div class="formula-note"><strong>Year to date:</strong> CALCULATE(SUM(Sales), DATESYTD('Date'[Date]))</div>
                          <div class="formula-note"><strong>Previous month:</strong> CALCULATE(SUM(Sales), PREVIOUSMONTH('Date'[Date]))</div>
                          <div class="formula-note"><strong>Conditional sum:</strong> SUMIF('Sales'[Region], "North", 'Sales'[Amount])</div>`
            },
            {
                category: 'Relationships & Models',
                content: `<ul class="list-item">Define relationships between tables via unique keys</ul>
                          <ul class="list-item">Use one-to-many for dimension and fact tables</ul>
                          <ul class="list-item">Create bridge tables for many-to-many relationships</ul>
                          <ul class="list-item">Mark tables as hidden to reduce visual clutter</ul>
                          <ul class="list-item">Use role-playing dimensions for multiple date dimensions</ul>
                          <ul class="list-item">Avoid bidirectional relationships when possible</ul>`
            },
            {
                category: 'Time Intelligence',
                content: `<div class="code-block"><span class="comment">// Month-over-month growth</span>
<span class="function">CalculatedMoM</span> := 
  <span class="keyword">VAR</span> <span class="function">CurrentMonth</span> = [CurrentMonthSales]
  <span class="keyword">VAR</span> <span class="function">PreviousMonth</span> = <span class="function">CALCULATE</span>([MonthSales], <span class="function">PREVIOUSMONTH</span>(...))
  <span class="keyword">RETURN</span> 
    <span class="function">DIVIDE</span>((<span class="function">CurrentMonth</span> - <span class="function">PreviousMonth</span>), <span class="function">PreviousMonth</span>)

<span class="comment">// Year-to-date total</span>
<span class="keyword">YTD Sales</span> := <span class="function">CALCULATE</span>([TotalSales], <span class="function">DATESYTD</span>(<span class="function">Date</span>[Date]))</div>`
            },
            {
                category: 'Performance Optimization',
                content: `<ul class="list-item">Use VAR for complex calculations to improve readability</ul>
                          <ul class="list-item">Avoid circular dependencies in calculated columns</ul>
                          <ul class="list-item">Use calculated columns sparingly for fact tables</ul>
                          <ul class="list-item">Implement row-level security (RLS) for multi-tenant data</ul>
                          <ul class="list-item">Aggregate fact tables at lowest granularity</ul>
                          <ul class="list-item">Use Query Editor to filter data before loading</ul>`
            },
            {
                category: 'Visualization Best Practices',
                content: `<div class="formula-note"><strong>Use color strategically:</strong> Limit to 3-5 colors per visual</div>
                          <div class="formula-note"><strong>Avoid dual axes:</strong> Can misrepresent data relationships</div>
                          <div class="formula-note"><strong>Pie charts sparingly:</strong> Bar charts often clearer</div>
                          <div class="formula-note"><strong>Add context:</strong> Include comparisons and benchmarks</div>
                          <div class="formula-note"><strong>Responsive design:</strong> Test on mobile and tablet</div>`
            }
        ]
    },
    'tips': {
        title: 'Consultant Tips',
        sections: [
            {
                category: 'Project Kickoff',
                content: `<ul class="list-item">Define clear success criteria before development starts</ul>
                          <ul class="list-item">Document business processes before mapping to system</ul>
                          <ul class="list-item">Identify key stakeholders and decision makers</ul>
                          <ul class="list-item">Set realistic timelines with buffer for unknowns</ul>
                          <ul class="list-item">Establish communication cadence with client</ul>
                          <ul class="list-item">Create RACI matrix for accountability</ul>`
            },
            {
                category: 'Requirements Gathering',
                content: `<ul class="list-item">Workshop with all departments, not just IT</ul>
                          <ul class="list-item">Document current state workflows and pain points</ul>
                          <ul class="list-item">Separate "must have" from "nice to have" requirements</ul>
                          <ul class="list-item">Get requirements in writing and signed off</ul>
                          <ul class="list-item">Account for seasonal variations and growth</ul>
                          <ul class="list-item">Review data quality issues early</ul>`
            },
            {
                category: 'Solution Design',
                content: `<ul class="list-item">Start with standard functionality before customization</ul>
                          <ul class="list-item">Document technical architecture and integrations</ul>
                          <ul class="list-item">Plan for data migration before implementation</ul>
                          <ul class="list-item">Design for scalability and future growth</ul>
                          <ul class="list-item">Create detailed impact analysis for changes</ul>
                          <ul class="list-item">Use version control for all code and configurations</ul>`
            },
            {
                category: 'Testing Strategy',
                content: `<ul class="list-item">Create test scenarios based on actual business workflows</ul>
                          <ul class="list-item">Test with realistic data volumes and distributions</ul>
                          <ul class="list-item">Include regression testing in each cycle</ul>
                          <ul class="list-item">Get business users involved in UAT early</ul>
                          <ul class="list-item">Document defects with clear reproduction steps</ul>
                          <ul class="list-item">Plan for performance testing before go-live</ul>`
            },
            {
                category: 'Go-Live',
                content: `<ul class="list-item">Execute parallel run with legacy system if possible</ul>
                          <ul class="list-item">Have rollback plan and backup systems in place</ul>
                          <ul class="list-item">Brief all users on new processes before cutover</ul>
                          <ul class="list-item">Monitor system health closely first 72 hours</ul>
                          <ul class="list-item">Provide dedicated support during transition period</ul>
                          <ul class="list-item">Schedule post-go-live review within 30 days</ul>`
            },
            {
                category: 'Knowledge Transfer',
                content: `<ul class="list-item">Create comprehensive documentation for all customizations</ul>
                          <ul class="list-item">Document business logic and design decisions</ul>
                          <ul class="list-item">Conduct hands-on training sessions with IT team</ul>
                          <ul class="list-item">Create runbooks for common support scenarios</ul>
                          <ul class="list-item">Establish escalation procedures for complex issues</ul>
                          <ul class="list-item">Plan for post-implementation support period</ul>`
            }
        ]
    }
};

// State Management
let currentSection = 'business-central';

// Initialize Application
document.addEventListener('DOMContentLoaded', loadApplication);

function loadApplication() {
    initializeNavigation();
    initializeCopilot();
    loadContent(currentSection);
}

// Navigation Initialization
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const section = this.dataset.section;
            setActiveSection(section);
            loadContent(section);
        });
    });
}

function setActiveSection(section) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-section="${section}"]`).classList.add('active');
    currentSection = section;
}

// Content Loading
function loadContent(section) {
    const data = contentDatabase[section];
    const contentDiv = document.getElementById('content');
    
    let html = `<div class="section active">
                    <h2 class="section-title">${data.title}</h2>
                    <div class="cheat-sheet">`;
    
    data.sections.forEach(item => {
        html += `<div class="cheat-category">
                    <span class="category-title">${item.category}</span>
                    <div class="category-content">${item.content}</div>
                </div>`;
    });
    
    html += `</div></div>`;
    contentDiv.innerHTML = html;
}

// Copilot Initialization
function initializeCopilot() {
    const copilotToggle = document.getElementById('copilotToggle');
    const copilotPanel = document.getElementById('copilotPanel');
    const copilotSubmit = document.getElementById('copilotSubmit');
    const copilotInput = document.getElementById('copilotInput');
    
    copilotToggle.addEventListener('click', function() {
        const isOpen = copilotPanel.style.display === 'none';
        copilotPanel.style.display = isOpen ? 'block' : 'none';
        copilotToggle.setAttribute('aria-expanded', isOpen);
    });
    
    copilotSubmit.addEventListener('click', submitCopilotQuery);
    copilotInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
            submitCopilotQuery();
        }
    });
}

function submitCopilotQuery() {
    const input = document.getElementById('copilotInput');
    const query = input.value.trim();
    const responseDiv = document.getElementById('copilotResponse');
    const submitBtn = document.getElementById('copilotSubmit');
    
    if (!query) {
        return;
    }
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Processing...';
    responseDiv.innerHTML = '<div class="response-header">Analyzing...</div>';
    responseDiv.classList.add('visible');
    
    // Simulate AI processing with timeout (non-blocking)
    setTimeout(() => {
        const response = generateCopilotResponse(query, currentSection);
        responseDiv.innerHTML = response;
        submitBtn.disabled = false;
        submitBtn.textContent = 'Get Guidance';
        input.value = '';
    }, 600);
}

function generateCopilotResponse(query, section) {
    const lowerQuery = query.toLowerCase();
    
    let response = '<div class="response-header">Guidance</div>';
    
    if (section === 'business-central') {
        if (lowerQuery.includes('table') && lowerQuery.includes('create')) {
            response += `<div class="response-item"><strong>Table Creation:</strong> Use the table object type with fields. Remember to define a primary key field. Each table needs a unique ID number (50000+). Tables are the foundation of data storage in AL.</div>
                        <div class="response-item"><strong>Best Practice:</strong> Keep table structures normalized. Use appropriate field types (Code, Text, Integer, Decimal, Date) to optimize performance.</div>`;
        } else if (lowerQuery.includes('event')) {
            response += `<div class="response-item"><strong>Event Pattern:</strong> Use [EventSubscriber] attribute to handle table events. Common events include OnBeforeInsert, OnAfterModify, and OnBeforeDelete.</div>
                        <div class="response-item"><strong>Tip:</strong> Events allow decoupling of logic. Use them for side-effects and validations rather than business logic.</div>`;
        } else if (lowerQuery.includes('query') || lowerQuery.includes('filter')) {
            response += `<div class="response-item"><strong>Query Patterns:</strong> Use SetRange for exact matches, SetFilter for complex conditions. FindSet() retrieves multiple records; FindFirst() gets one.</div>
                        <div class="response-item"><strong>Performance Note:</strong> Apply filters before FindSet() to reduce record processing. Use Get() for single record retrievals by key.</div>`;
        } else {
            response += `<div class="response-item"><strong>AL Development:</strong> When working with AL, consider: Are you modifying standard objects or creating new ones? What's the performance impact? Is there a business event you should subscribe to instead of modifying code?</div>
                        <div class="response-item"><strong>Next Step:</strong> Check the AL cheat-sheet section above for common patterns and methods.</div>`;
        }
    } else if (section === 'power-apps') {
        if (lowerQuery.includes('formula') || lowerQuery.includes('function')) {
            response += `<div class="response-item"><strong>Power Fx Formulas:</strong> Power Apps uses Power Fx for logic. Common functions include Filter(), Sort(), Patch() for data operations, and If() for conditionals.</div>
                        <div class="response-item"><strong>Tip:</strong> Use named formulas to break complex logic into reusable pieces. Test formulas in inline syntax before using them.</div>`;
        } else if (lowerQuery.includes('data') || lowerQuery.includes('connector')) {
            response += `<div class="response-item"><strong>Data Sources:</strong> Connect to SharePoint, SQL, Dataverse, Excel, etc. Use Patch() to create/update, Remove() to delete. Always validate before operations.</div>
                        <div class="response-item"><strong>Best Practice:</strong> Use delegation where possible for large datasets. Delegation arrow warns when this isn't supported.</div>`;
        } else if (lowerQuery.includes('validation') || lowerQuery.includes('validate')) {
            response += `<div class="response-item"><strong>Form Validation:</strong> Check IsBlank(), IsError(), and Validity() functions. Show error messages using Notify() function on button clicks.</div>
                        <div class="response-item"><strong>Pattern:</strong> Validate inputs before Patch() or Collect() operations to prevent bad data.</div>`;
        } else {
            response += `<div class="response-item"><strong>Power Apps Development:</strong> Consider: What's your data source? Are users on desktop or mobile? How will you handle offline scenarios?</div>
                        <div class="response-item"><strong>Next Step:</strong> Review formula examples in the cheat-sheet above and test in your app.</div>`;
        }
    } else if (section === 'power-automate') {
        if (lowerQuery.includes('http') || lowerQuery.includes('api') || lowerQuery.includes('request')) {
            response += `<div class="response-item"><strong>HTTP Requests:</strong> Use HTTP action for custom integrations. Always include proper authentication (OAuth, API Key, or Basic). Parse JSON responses with Parse JSON action.</div>
                        <div class="response-item"><strong>Error Handling:</strong> Add "Configure run after" to handle failures. Check status codes in HTTP response.</div>`;
        } else if (lowerQuery.includes('approval') || lowerQuery.includes('workflow')) {
            response += `<div class="response-item"><strong>Approval Flows:</strong> Use "Start approval" action. Configure conditions to route based on approval response. Update source systems based on decision.</div>
                        <div class="response-item"><strong>Best Practice:</strong> Set timeouts for approvals. Send reminders for pending approvals. Log approval history.</div>`;
        } else if (lowerQuery.includes('sharepoint') || lowerQuery.includes('list')) {
            response += `<div class="response-item"><strong>SharePoint Integration:</strong> Use "Create item", "Update item", "Get item" actions. Reference lookup columns correctly. Use filtering to find specific items.</div>
                        <div class="response-item"><strong>Tip:</strong> Test with multiple sites. SharePoint permissions affect flow execution.</div>`;
        } else {
            response += `<div class="response-item"><strong>Automation Design:</strong> What system triggers the flow? What's the approval process? Will you need to handle errors and send notifications?</div>
                        <div class="response-item"><strong>Next Step:</strong> Start with a simple trigger (manual button) and gradually add actions. Test thoroughly.</div>`;
        }
    } else if (section === 'power-bi') {
        if (lowerQuery.includes('dax') || lowerQuery.includes('measure') || lowerQuery.includes('formula')) {
            response += `<div class="response-item"><strong>DAX Measures:</strong> Use CALCULATE() to modify filter context. Use SUMMARIZE() for custom aggregations. Variables (VAR) improve readability for complex formulas.</div>
                        <div class="response-item"><strong>Performance:</strong> Keep measures simple. Use implicit measures before explicit ones when possible. Avoid calculated columns on large tables.</div>`;
        } else if (lowerQuery.includes('model') || lowerQuery.includes('relationship')) {
            response += `<div class="response-item"><strong>Data Modeling:</strong> Create star schema with dimension and fact tables. Define proper relationships (1:many). Use role-playing dimensions for multiple dates.</div>
                        <div class="response-item"><strong>Best Practice:</strong> Hide unnecessary columns from end users. Use descriptive names. Avoid bidirectional relationships.</div>`;
        } else if (lowerQuery.includes('visual') || lowerQuery.includes('chart') || lowerQuery.includes('report')) {
            response += `<div class="response-item"><strong>Visualization:</strong> Choose chart types that match your data. Limit colors to 3-5. Add context with comparisons: YTD, Target, Previous Year.</div>
                        <div class="response-item"><strong>UX Tip:</strong> Use slicers for filtering. Create drill-through pages for details. Test on mobile devices.</div>`;
        } else {
            response += `<div class="response-item"><strong>BI Strategy:</strong> What's your data source? Who are the users? What decisions will they make with this dashboard?</div>
                        <div class="response-item"><strong>Next Step:</strong> Start with a simple report. Add complexity gradually. Get user feedback early and often.</div>`;
        }
    } else if (section === 'tips') {
        if (lowerQuery.includes('requirement') || lowerQuery.includes('gather')) {
            response += `<div class="response-item"><strong>Requirements Workshop:</strong> Involve all stakeholders, not just management. Document current state thoroughly. Prioritize with MUST/SHOULD/COULD framework.</div>
                        <div class="response-item"><strong>Sign-Off:</strong> Get requirements approved in writing. Plan for change management. Account for seasonal and growth scenarios.</div>`;
        } else if (lowerQuery.includes('test') || lowerQuery.includes('testing')) {
            response += `<div class="response-item"><strong>Testing Strategy:</strong> Create test cases from actual workflows. Use realistic data volumes. Include regression and performance testing.</div>
                        <div class="response-item"><strong>UAT:</strong> Get business users involved early. Document issues with reproduction steps. Plan for production issues post-launch.</div>`;
        } else if (lowerQuery.includes('go live') || lowerQuery.includes('launch') || lowerQuery.includes('deployment')) {
            response += `<div class="response-item"><strong>Go-Live Preparation:</strong> Execute parallel run if possible. Have rollback plan ready. Brief all users before cutover.</div>
                        <div class="response-item"><strong>Support:</strong> Monitor first 72 hours closely. Establish escalation procedures. Schedule post-launch review within 30 days.</div>`;
        } else {
            response += `<div class="response-item"><strong>Consulting Approach:</strong> What project phase are you in? What challenges are you facing? Who needs to be involved in the decision?</div>
                        <div class="response-item"><strong>Remember:</strong> Technology is 30%, people and process are 70%. Focus on understanding the business problem first.</div>`;
        }
    }
    
    return response;
}

// Prevent infinite DOM growth by limiting copilot messages
function clearOldResponses() {
    const responseDiv = document.getElementById('copilotResponse');
    if (responseDiv && responseDiv.children.length > 10) {
        responseDiv.innerHTML = '';
    }
}

// Performance monitoring for Wallpaper mode
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Pause any animations if needed
    } else {
        // Resume if needed
    }
});
