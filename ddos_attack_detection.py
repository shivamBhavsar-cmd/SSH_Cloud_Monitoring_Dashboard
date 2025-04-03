import matplotlib.pyplot as plt

# Sample data (Replace this with real detection data)
ddos_requests = [100, 250, 300, 500, 700]
timestamps = ["10:00", "10:10", "10:20", "10:30", "10:40"]

# Create the plot
plt.figure(figsize=(8, 5))
plt.plot(timestamps, ddos_requests, marker='o', linestyle='-', color='b', label='DDoS Requests')
plt.xlabel("Time")
plt.ylabel("Number of Requests")
plt.title("DDoS Attack Intensity Over Time")
plt.legend()

# Save the plot as an image
output_path = "output/ddos_attack_distribution.png"
plt.savefig(output_path)
print(f"DDoS attack distribution image saved: {output_path}")
plt.close()
