---
hide:
  - navigation
---
# Getting Started

The steps in this section are aimed at new users of <a href="../models/">ACCESS models</a> who would like to do any of the following:

- Run your own experiment
- Get model outputs
- Analysing model outputs
- Evaluate model performance
- Perform other tasks involving ACCESS Models
<hr>

## Create an NCI user account
Most of the data and models you will need are available at the <a href="https://nci.org.au/about-us/who-we-are" target="_blank">National Computing Infrastructure (NCI) </a>.
<br>
To access these, you need an <a href="https://opus.nci.org.au/display/Help/How+to+create+an+NCI+user+account" target="_blank">NCI account</a>. If you do not have one, <a href="https://my.nci.org.au/mancini/signup/0" target="_blank">sign up here</a>.
<div class="note">
You will need an institutional email address with an organisation that allows access to NCI (e.g., an Australian university, ACCESS-NRI, CSIRO, BoM, CLEX, etc.).
</div>
Once you sign up, you will be assigned a <i>username</i> (e.g., `ab1234`).
<hr>

## Join relevant NCI projects

NCI is hosting a large amount of data for the climate community on its supercomputer <i>Gadi</i>. Access to this storage, as well as to computing resources to run models and evaluate them, is organised in *projects*.

To perform computations on <i>Gadi</i>, you need to join a project with computing resources. This project code will be provided by your supervisor, research project or institution.

To join a project, search for it on <a href="https://my.nci.org.au/mancini/project-search" target="_blank">NCI website</a> and request membership.

Each project has an ID (e.g. `xp65`), which is what the term <i>project</i> actually refers to.
<br>
<div class="note">
  The first project you join will become your default one. If you would like to change this, check out <a href="#change-default-project-on-gadi">how to change your default project on Gadi</a>.
</div> 

There are several NCI projects that may be relevant to you, depending on the tasks you want to carry out. 
<br>
For tasks supported by ACCESS-NRI (e.g., running a supported model configuration, using a supported model evaluation tool, etc.), you will find a list of relevant projects to join in the pages relative to each respective task.

<hr>

## Login to Gadi
Operations such as model runs and output data I/O take place on the <a href="https://nci.org.au/our-systems/hpc-systems" target="_blank">Gadi supercomputer</a>.

Before you login to <i>Gadi</i>, you need to possess the following prerequisites:
<ul>
  <li><b>Internet connection</b></li>
  <li>
    <b>UNIX-like terminal</b>
    <br>
    Linux and MacOS operative systems already have a built-in UNIX-like terminal.
    <br>
    Windows users can install <a href="https://learn.microsoft.com/en-us/windows/wsl" target="_blank">Windows Subsystems for Linux (WSL)</a>. 
    <div class="note">
      Alternatively, you can login through the <a href="https://are.nci.org.au/pun/sys/shell/ssh/gadi.nci.org.au" target="_blank">ARE Gadi Terminal</a>. 
      <br>
      However, it is recommended that you connect to <i>Gadi</i> from your local machine's terminal without using ARE. 
    </div>
  </li>
</ul>

To login to <i>Gadi</i> using <a href="https://en.wikipedia.org/wiki/Secure_Shell" target="_blank">SSH</a>, on your **local machine's terminal** run the following command, replacing <code>&lt;your-NCI-username&gt;</code> with your NCI <i>username</i> (e.g., <code>ab1234</code>):
<pre><code>ssh &lt;your-NCI-username&gt;@gadi.nci.org.au</code></pre>
You will be prompted to enter your NCI password, and then you will be connected to <i>Gadi</i>:
<terminal-window lineDelay=0>
  <terminal-line data="input" lineDelay=300>ssh &lt;your-NCI-username&gt;@gadi.nci.org.au</terminal-line>
  <terminal-line lineDelay=300>&lt;NCI-username&gt;@gadi.nci.org.au's password: <i class="icon-key" style="display: inline-block; font-size: 0.4em; transform: rotate(-90deg);"></i></terminal-line>
  <terminal-line lineDelay=3000>###############################################################################</terminal-line>
  <terminal-line>#&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Welcome to the NCI National Facility!&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;#</terminal-line>
  <terminal-line>#&emsp;&emsp;&emsp;&emsp;This service is for authorised clients only. It is a criminal&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;#</terminal-line>
  <terminal-line>#&emsp;&emsp;&emsp;&emsp;offence to:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#</terminal-line>
  <terminal-line>#&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;- Obtain access to data without permission;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;#</terminal-line>
  <terminal-line>#&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;- Damage, delete, alter or insert data without permission;&emsp;&nbsp;#</terminal-line>
  <terminal-line>#&emsp;&emsp;&emsp;&emsp;Use of this system requires acceptance of the Conditions of Use;&emsp;&emsp;&emsp;&emsp;#</terminal-line>
  <terminal-line>#&emsp;&emsp;&emsp;&emsp;published at http://nci.org.au/users/nci-terms-and-conditions-access;&emsp;#</terminal-line>
  <terminal-line>###############################################################################</terminal-line>
  <terminal-line>|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;gadi.nci.org.au - 260,760 processor InfiniBand x86_64 cluster&emsp;&emsp;&nbsp;&nbsp;&nbsp;|</terminal-line>
  <terminal-line>===============================================================================</terminal-line>
  <terminal-line>===============================================================================</terminal-line>
  <terminal-line data="input" lineDelay=200></terminal-line>
</terminal-window>

### Auto login
To simplify the login and avoid being prompted every time to enter your NCI password, follow these steps:
<ol>
  <li>
    <b>Create an SSH key</b>
    <br>
    To create an SSH key on your <b>local machine</b>, run:
    <pre><code>ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_gadi</code></pre>
    You will be prompted to create a passphrase linked to the SSH key, which you will enter twice:
    <terminal-window>
      <terminal-line data="input">ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_gadi</terminal-line>
      <terminal-line>Generating public/private rsa key pair.</terminal-line>
      <terminal-line>Enter passphrase (empty for no passphrase):</terminal-line>
      <terminal-line lineDelay=3000>Enter same passphrase again:</terminal-line>
      <terminal-line lineDelay=3000>Your identification has been saved in &lt;$HOME&gt;/.ssh/id_gadi</terminal-line>
      <terminal-line>Your public key has been saved in /Users/davide/.ssh/id_gadi.pub</terminal-line>
      <terminal-line lineDelay=0>The key fingerprint is:</terminal-line>
      <terminal-line lineDelay=0>SHA256:&lt;fingerprint-code&gt; &lt;$USER@hostname&gt;</terminal-line>
      <terminal-line lineDelay=0>The key's randomart image is:</terminal-line>
      <terminal-line lineDelay=0>+---[RSA 4096]----+</terminal-line>
      <terminal-line lineDelay=0>|xxxxxxxxxxxxxxxxx|</terminal-line>
      <terminal-line lineDelay=0>|xxxxxxxxxxxxxxxxx|</terminal-line>
      <terminal-line lineDelay=0>|xxxxxxxxxxxxxxxxx|</terminal-line>
      <terminal-line lineDelay=0>|xxxxxxxxxxxxxxxxx|</terminal-line>
      <terminal-line lineDelay=0>|xxxxxxxxxxxxxxxxx|</terminal-line>
      <terminal-line lineDelay=0>|xxxxxxxxxxxxxxxxx|</terminal-line>
      <terminal-line lineDelay=0>|xxxxxxxxxxxxxxxxx|</terminal-line>
      <terminal-line lineDelay=0>|xxxxxxxxxxxxxxxxx|</terminal-line>
      <terminal-line lineDelay=0>+----[SHA256]-----+</terminal-line>
    </terminal-window>
    <div class="note">
      For security reasons, it is recommended to enter a passphrase rather than leave it empty.
      <br>
      As you will see in the next step, you will not need to enter the passphrase every time you login to <i>Gadi</i>.
    </div>
  </li>
  <li>
    <b>Add the SSH key to the SSH-agent</b>
    <br>
    An SSH-agent is an SSH key manager that avoids you having to enter your passphrase every time you connect to a server.
    <br>
    To add the SSH key to the SSH-agent:
    <!-- Tab labels -->
    <div class="tabLabels" label="systems">
      <button>MacOS</button>
      <button>Linux / Windows</button>
    </div>
    <!-- Tab content -->
    <div class="tabContents" label="systems">
      <!-- MacOS -->
      <div>
        <ol>
          <li>
            On your <b>local machine</b>, start the SSH-agent by running:
            <pre><code>eval "$(ssh-agent -s)"</code></pre>
            <terminal-window>
              <terminal-line data="input">eval "$(ssh-agent -s)"</terminal-line>
              <terminal-line>Agent pid &lt;agent-PID&gt;</terminal-line>
            </terminal-window>
          </li>
          <li>
            Add your SSH key to the SSH-agent by running:
            <pre><code>ssh-add --apple-use-keychain ~/.ssh/id_gadi</code></pre>
            You will be prompted to enter your SSH key passphrase, which will be stored inside the SSH-agent:
            <terminal-window>
              <terminal-line data="input">ssh-add --apple-use-keychain ~/.ssh/id_gadi</terminal-line>
              <terminal-line>Enter passphrase for &lt;$HOME&gt;/.ssh/id_gadi:</terminal-line>
              <terminal-line lineDelay=3000>Identity added: &lt;$HOME&gt;/.ssh/id_gadi &lt;$USER@hostname&gt;</terminal-line>
            </terminal-window>
            <div class="note">
              If you are using a MacOS version prior to Monterey (12.0), substitute the <code>--apple-use-keychain</code> flag with <code>-K</code>.
            </div>
          </li>
        </ol>
      </div>
      <!-- Linux/Windows -->
      <div>
        <ol>
          <li>
            On your <b>local machine</b>, start the SSH-agent by running:
            <pre><code>eval "$(ssh-agent -s)"</code></pre>
            <terminal-window>
              <terminal-line data="input">eval "$(ssh-agent -s)"</terminal-line>
              <terminal-line>Agent pid &lt;agent-PID&gt;</terminal-line>
            </terminal-window>
          </li>
          <li>
            Add your SSH key to the SSH-agent by running:
            <pre><code>ssh-add ~/.ssh/id_gadi</code></pre>
            You will be prompted to enter your SSH key passphrase, which will be stored inside the SSH-agent:
            <terminal-window>
              <terminal-line data="input">ssh-add ~/.ssh/id_gadi</terminal-line>
              <terminal-line>Enter passphrase for &lt;$HOME&gt;/.ssh/id_gadi:</terminal-line>
              <terminal-line lineDelay=3000>Identity added: &lt;$HOME&gt;/.ssh/id_gadi &lt;$USER@hostname&gt;</terminal-line>
            </terminal-window>
          </li>
        </ol>
      </div>
    </div>
    <!-- End of tab content -->
  </li>
  <li>
    <b>Create/Update the SSH config file</b>
    <br>
    The <code>~/.ssh/config</code>  is a file where you can store labelled SSH configurations for different remote servers you regularly connect to, so you do not have to remember them all.
    <br>
    To create an SSH config file, run the following command on your <b>local machine</b>:
    <pre><code>touch ~/.ssh/config</code></pre>
    <div class="note">
      If you already have an existing <code>~/.ssh/config</code> file, the above command will not have any effect.
    </div>
    The following lines should be added to your <code>~/.ssh/config</code> to describe the SSH configuration for <i>Gadi</i> (replace <code>&lt;your-NCI-username&gt;</code> with your NCI <i>username</i>, e.g., <code>ab1234</code>):
    <pre><code>Host gadi
    Hostname gadi.nci.org.au
    User &lt;your-NCI-username&gt;
    ForwardX11 true
    ForwardX11Trusted yes
    IdentityFile ~/.ssh/id_gadi
    AddKeysToAgent yes
    UseKeychain yes</code></pre>
    <div class="note">
      If you already have an existing <code>~/.ssh/config</code> file which contains configurations for every <code>Host</code> (e.g., by using <code>Host *</code>), make sure you delete any of the keywords present in that SSH configuration from the <i>Gadi</i> configuration above.
      <br>
    </div>
  </li>
  <li>
    <b>Add the SSH key to the authorised keys</b>
    <br>
    To enable automatic connection to a server, that server needs to recognise the SSH key as <i>authorised</i>. The list of authorised keys for a certain server is stored in the file <code>~/.ssh/authorized_keys</code>.
    <br>
    To add the newly created SSH key as an <i>authorised</i> key for <i>Gadi</i>, run the following command from your <b>local machine</b>:
    <pre><code>var=$( cat ~/.ssh/id_gadi.pub ) && ssh gadi "echo $var >> .ssh/authorized_keys"</code></pre>
    <div class="note">
      Make sure to use double quotes <code>"</code> in the above command.
    </div>
    You will be prompted to enter your NCI password. If you did all of the above steps correctly, this should be the last time you need to do so.
  </li>
</ol>
Once you complete all the above steps, you should be able to connect to <i>Gadi</i> from your **local machine's terminal** simply by running:
<pre><code>ssh gadi</code></pre>

### Change default project on Gadi
It is recommended that you check what your default project on <i>Gadi</i> is set to. The default project should be set to the computational project you will most likely use to run simulations/evaluations and store data.
<br>
You can check which is your default project by logging into <i>Gadi</i> and running:
<pre><code>echo $PROJECT</code></pre>
To change your default project on <i>Gadi</i>, you need to manually change the `PROJECT` field in the `~/.config/gadi-login.conf` file.
<br>
Alternatively, you can run the following command <b>on <i>Gadi</i>'s terminal</b>:
<pre><code>sed "s/\(PROJECT \).*/\1&lt;new-default-project&gt;/" ~/.config/gadi-login.conf</code></pre>
Once this is done, exit from <i>Gadi</i> and log back in.
<br>
For example, if you want to change your default project to `tm70` on <i>Gadi</i>:
<terminal-window>
  <terminal-line data="input">echo $PROJECT</terminal-line>
  <terminal-line>&lt;old-default-project&gt;</terminal-line>
  <terminal-line data="input">sed "s/\(PROJECT \).*/\1tm70/" ~/.config/gadi-login.conf</terminal-line>
  <terminal-line data="input">exit</terminal-line>
  <terminal-line>logout</terminal-line>
  <terminal-line>Connection to gadi.nci.org.au closed.</terminal-line>
  <terminal-line data="input" PS1="&lt;span style='color: #9734bb;'&gt;(User PC)$ &lt;/span&gt;">ssh gadi</terminal-line>
  <terminal-line>###############################################################################</terminal-line>
  <terminal-line lineDelay=0>#&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Welcome to the NCI National Facility!&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;#</terminal-line>
  <terminal-line lineDelay=0>#&emsp;&emsp;&emsp;&emsp;This service is for authorised clients only. It is a criminal&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;#</terminal-line>
  <terminal-line lineDelay=0>#&emsp;&emsp;&emsp;&emsp;offence to:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#</terminal-line>
  <terminal-line lineDelay=0>#&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;- Obtain access to data without permission;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;#</terminal-line>
  <terminal-line lineDelay=0>#&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;- Damage, delete, alter or insert data without permission;&emsp;&nbsp;#</terminal-line>
  <terminal-line lineDelay=0>#&emsp;&emsp;&emsp;&emsp;Use of this system requires acceptance of the Conditions of Use;&emsp;&emsp;&emsp;&emsp;#</terminal-line>
  <terminal-line lineDelay=0>#&emsp;&emsp;&emsp;&emsp;published at http://nci.org.au/users/nci-terms-and-conditions-access;&emsp;#</terminal-line>
  <terminal-line lineDelay=0>###############################################################################</terminal-line>
  <terminal-line lineDelay=0>|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;gadi.nci.org.au - 260,760 processor InfiniBand x86_64 cluster&emsp;&emsp;&nbsp;&nbsp;&nbsp;|</terminal-line>
  <terminal-line lineDelay=0>===============================================================================</terminal-line>
  <terminal-line lineDelay=0>===============================================================================</terminal-line>
  <terminal-line data="input">echo $PROJECT</terminal-line>
  <terminal-line>tm70</terminal-line>
</terminal-window>
<hr>

<h6>References</h6>
<ul class="references">
    <li>
        <a href = "https://my.nci.org.au" target="_blank">https://nci.org.au</a>
    </li>
    <li>
        <a href = "https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi" target="_blank">https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi</a>
    </li>
    <li>
        <a href = "https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent" target="_blank">https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent</a>
    </li>
    <li>
        <a href = "https://linuxize.com/post/using-the-ssh-config-file/" target="_blank">https://linuxize.com/post/using-the-ssh-config-file</a>
    </li>
</ul>
